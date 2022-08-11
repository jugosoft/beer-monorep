import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './services/user/user.service';
import { UserResolver } from './resolvers/user/user.resolver';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
  controllers: [UserController],
})
export class UsersModule { }
