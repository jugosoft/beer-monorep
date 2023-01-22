import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserInput } from 'src/modules/users/inputs/create-user.input';
import { UserService } from 'src/modules/users/services/user/user.service';
import { Tokens } from '../types';
import { AuthLoginInput } from '../inputs/auth-login.input';

import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async loginLocal(authLoginInput: AuthLoginInput): Promise<Tokens> {
        const user = await this.usersService.getOneUserByName(authLoginInput.name);

        if (!user) {
            throw new BadRequestException('Access Denied. Try again!');
        }

        const passwordMatch = await argon2.verify(user.password, authLoginInput.password);

        if (!passwordMatch) {
            throw new BadRequestException('Access Denied. Try again!');
        }

        const tokens = await this.getTokens(user.id, user.name);

        await this.updateRtHash(user.id, tokens.refreshToken);

        return tokens;
    }

    async registerLocal(createUserInput: CreateUserInput): Promise<Tokens> {
        const userExists = await this.usersService.getOneUserByName(createUserInput.name);
        if (userExists) {
            throw new BadRequestException('User already exists');
        }

        // Hash password
        const hash = await this.hashData(createUserInput.password);
        const newUser = await this.usersService.createUser({
            ...createUserInput,
            password: hash
        });

        const tokens = await this.getTokens(newUser.id, newUser.name);

        await this.updateRtHash(newUser.id, tokens.refreshToken);

        return tokens;
    }

    async logout(userId: number): Promise<boolean> {
        await this.usersService.updateUserRt({ id: userId, hashedRT: null });
        return true;
    }

    async updateRtHash(userId: number, refreshToken: string): Promise<void> {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.updateUserRt({ id: userId, hashedRT: hashedRefreshToken });
    }

    async refreshTokens(userId: number, refreshToken: string): Promise<Tokens> {
        const user = await this.usersService.getOneUser(userId);
        if (!user || !user.hashedRT) {
            throw new ForbiddenException('Access Denied');
        }

        const refreshTokenMatches = await argon2.verify(user.hashedRT, refreshToken);
        if (!refreshTokenMatches) {
            throw new ForbiddenException('Access Denied');
        }

        const tokens = await this.getTokens(userId, user.name);
        await this.updateRtHash(userId, tokens.refreshToken);
        return tokens;
    }

    async getTokens(userId: number, username: string): Promise<Tokens> {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username
                }, 
                {
                    secret: process.env.AT_SECRET,
                    expiresIn: '15m'
                }
            ),
            this.jwtService.signAsync(
                {
                    sub: userId,
                    username
                },
                {
                    secret: process.env.RT_SECRET,
                    expiresIn: '7d'
                }
            )
        ]);

        return {
            accessToken,
            refreshToken
        };
    }

    hashData(data: string): Promise<string> {
        return argon2.hash(data);
    }
}
