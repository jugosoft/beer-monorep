import { Controller,Post, UseGuards, Body } from '@nestjs/common';

import { CreateUserInput } from '../../../modules/users/inputs/create-user.input';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthLoginInput } from '../inputs/auth-login.input';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() authLoginInput: AuthLoginInput): Promise<any> {
    return this.authService.login(authLoginInput.name);
  }

  @Post('register')
  async register(@Body() authRegisterInput: CreateUserInput): Promise<any> {
    return this.authService.register(authRegisterInput);
  }
}
