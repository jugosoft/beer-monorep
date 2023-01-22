import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';

import { GetCurrentUserId, GetCurrentUser } from 'src/common';
import { AtGuard, RtGuard } from '../guards';
import { AuthLoginInput } from '../inputs/auth-login.input';
import { AuthRegisterInput } from '../inputs/auth-register.input';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../types';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('local/login')
    @HttpCode(HttpStatus.OK)
    async loginLocal(@Body() authLoginInput: AuthLoginInput): Promise<Tokens> {
        return this.authService.loginLocal(authLoginInput);
    }

    @Post('local/register')
    @UsePipes(new ValidationPipe())
    @HttpCode(HttpStatus.CREATED)
    async registerLocal(@Body() authRegisterInput: AuthRegisterInput): Promise<Tokens> {
        return this.authService.registerLocal(authRegisterInput);
    }

    @UseGuards(AtGuard)
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(@GetCurrentUserId() userId: number): Promise<boolean> {
        return this.authService.logout(userId);
    }

    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refreshTokens(
        @GetCurrentUserId() userId: number,
        @GetCurrentUser('refreshToken') refreshToken: string
    ): Promise<Tokens> {
        return this.authService.refreshTokens(userId, refreshToken);
    }
}
