import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { GetCurrentUserId, GetCurrentUser, Public } from 'src/common';
import { CreateUserInput } from '../../../modules/users/inputs/create-user.input';
import { AtGuard, RtGuard } from '../guards';
import { AuthLoginInput } from '../inputs/auth-login.input';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/login')
  @HttpCode(HttpStatus.OK)
  async loginLocal(@Body() authLoginInput: AuthLoginInput): Promise<Tokens> {
    return this.authService.login(authLoginInput);
  }
  
  @Public()
  @Post('local/register')
  @HttpCode(HttpStatus.CREATED)
  async registerLocal(@Body() authRegisterInput: CreateUserInput): Promise<Tokens> {
    return this.authService.registerLocal(authRegisterInput);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetCurrentUserId() userId: number): Promise<boolean> {
    return this.authService.logout(userId);
  }

  @Public()
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
