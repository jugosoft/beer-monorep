import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../users/services/user/user.service';

import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers:[AuthController]
})
export class AuthModule {}
