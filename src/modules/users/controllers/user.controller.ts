import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UserEntity } from '../entities/user.entity';
import { CreateUserInput } from '../inputs/create-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';
import { UserService } from '../services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService)
  { }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getOneUser(@Param() params): Promise<UserEntity> {
    return await this.userService.getOneUser(params.id);
  }

  @Post()
  async createUser(@Body() createUserInput: CreateUserInput): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Delete(':id')
  async removeOneUser(@Param() params): Promise<number> {
    return await this.userService.removeOneUser(params.id);
  }

  @Put()
  async updateUser(@Body() updateUserInput: UpdateUserInput): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }
}
