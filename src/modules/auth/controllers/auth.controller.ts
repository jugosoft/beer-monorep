import { Controller,Post, Body, HttpCode, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { CreateUserInput } from '../../../modules/users/inputs/create-user.input';
import { AuthLoginInput } from '../inputs/auth-login.input';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('local/login')
  @HttpCode(HttpStatus.OK)
  async loginLocal(@Body() authLoginInput: AuthLoginInput): Promise<Tokens> {
    return this.authService.login(authLoginInput);
  }
  
  @Post('local/register')
  @HttpCode(HttpStatus.CREATED)
  async registerLocal(@Body() authRegisterInput: CreateUserInput): Promise<Tokens> {
    return this.authService.registerLocal(authRegisterInput);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request): Promise<any> {
    const user = req['user'];
    return this.authService.logout(user['body']['sub  ']);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(@Req() req: Request): Promise<any> {
    const user = req['user'];
    return this.authService.refreshTokens(user['body']['sub'], user['body']['refreshToken']);
  }
}
