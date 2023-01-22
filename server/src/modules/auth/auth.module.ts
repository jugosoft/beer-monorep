import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities';

import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { AtStrategy, RtStrategy } from './strategies';


@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({}),
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [
        AuthService,
        AtStrategy,
        RtStrategy
    ],
    controllers: [
        AuthController
    ]
})
export class AuthModule { }
