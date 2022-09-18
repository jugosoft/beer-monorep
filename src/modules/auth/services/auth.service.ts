import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { jwtConstants } from 'constants/auth';
import { UserEntity } from 'src/entities/user.entity';
import { CreateUserInput } from 'src/modules/users/inputs/create-user.input';
import { UserService } from 'src/modules/users/services/user/user.service';
import { Tokens } from '../types';
import { CryptoService } from './crypto.service';
import { atSecret, rtSecret } from "constants/crypt";
import { AuthLoginInput } from '../inputs/auth-login.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService) {}

  async login(authLoginInput: AuthLoginInput): Promise<Tokens> {
    const user = await this.usersService.getOneUserByName(authLoginInput.name);
    
    if (!user) throw new ForbiddenException('Access Denied. Try again!');

    const passwordMatch = await this.cryptoService.verify(authLoginInput.password, user.password);
    if (!passwordMatch) throw new ForbiddenException('Access Denied. Try again!');

    const tokens = await this.getTokens(user.id, user.name);
    await this.updateRtHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async registerLocal(createUserInput: CreateUserInput): Promise<Tokens> {
    createUserInput.password = await this.cryptoService.hash(createUserInput.password);
    const user = await this.usersService.createUser(createUserInput);
    const tokens = await this.getTokens(user.id, user.name);
    await this.updateRtHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async logout(userId: number) : Promise<boolean>{
    await this.usersService.updateUserRt({id: userId, hashedRT: null});
    return true;
  }

  async updateRtHash(userId: number, refreshToken: string): Promise<void> {
    const hash = await this.cryptoService.hash(refreshToken);
    await this.usersService.updateUserRt({id: userId, hashedRT: hash});
  } 

  async refreshTokens(userId: number, refreshToken: string): Promise<Tokens> {
    const user = await this.usersService.getOneUser(userId);

    if (!user) throw new ForbiddenException('Access Denied. Try again!');
 
    if (!this.cryptoService.verify(refreshToken, user.hashedRT)) {
      throw new ForbiddenException('Access Denied. Try again!');
    }

    const tokens = await this.getTokens(user.id, user.name);
    await this.updateRtHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async getTokens(userId: number, username: string): Promise<Tokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.signToken(userId, username, this.config.get<string>(atSecret), jwtConstants.halfOfHour),
      this.signToken(userId, username, this.config.get<string>(rtSecret), jwtConstants.oneWeek),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async signToken(userId: number, username: string, secret: string, duration: string): Promise<string> {
    return await this.jwtService.signAsync({
      sub: userId,
      username, 
    }, { 
      expiresIn: duration,
      secret: secret,
    });
  }
}
