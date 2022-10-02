import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './services/user/user.service';
import { UserResolver } from './resolvers/user/user.resolver';
import { UserController } from './controllers/user.controller';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
  // controllers: [UserController],
  exports: [UserService]
})
export class UsersModule { }
