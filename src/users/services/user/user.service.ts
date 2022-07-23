import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({ ...createUserInput });
  }

  async getOneUser(id: number): Promise<UserEntity> | null {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async removeOneUser(id: number): Promise<number> | null {
    const deleteResult = await this.userRepository.delete({ id });
    if (deleteResult.affected !== 0) {
      return id;
    }
    return null;
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update({ id: updateUserInput.id }, { ...updateUserInput });
    return await this.getOneUser(updateUserInput.id);
  }
}
