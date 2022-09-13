import { Controller,Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserInput } from 'src/modules/users/inputs/create-user.input';

import { AuthLoginInput } from '../inputs/auth-login.input';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() authLoginInput: AuthLoginInput): Promise<any> {
    return this.authService.login(authLoginInput.name);
  }

  @Post('register')
  async register(@Body() authRegisterInput: CreateUserInput): Promise<any> {
    return this.authService.register(authRegisterInput);
  }
}
