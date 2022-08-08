import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from '../../entities/user.entity';
import { CreateUserInput } from '../../inputs/create-user.input';
import { UpdateUserInput } from '../../inputs/update-user.input';
import { UserService } from '../../services/user/user.service';

@Resolver('user')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Mutation(() => UserEntity)
  async createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async updateUser(@Args('updateUser') updateUserInput: UpdateUserInput): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => Number)
  async removeUser(@Args('removeUser') id: number): Promise<number> {
    return await this.userService.removeOneUser(id);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity> {
    return await this.userService.getOneUser(id);
  }

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
