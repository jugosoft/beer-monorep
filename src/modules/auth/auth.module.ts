import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { jwtConstants } from 'constants/auth';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { CryptoService } from './services/crypto.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({}),
  ],
  providers: [AuthService, CryptoService, AtStrategy, RtStrategy],
  controllers:[AuthController]
})
export class AuthModule {}
