import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/entities/user.entity';
import { CreateUserInput } from '../../inputs/create-user.input';
import { UpdateUserInput } from '../../inputs/update-user.input';
import { UpdateUserRtInput } from '../../inputs/update-user-rt.input';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
        return await this.userRepository.save({ ...createUserInput });
    }

    async getOneUser(id: number): Promise<UserEntity> | null {
        const user = await this.userRepository.findOne({ where: { id: id } });
        return user;
    }

    async getOneUserByEmail(email: string): Promise<UserEntity> | null {
        return await this.userRepository.findOne({ where: { email: email } });
    }

    async getOneUserByName(name: string): Promise<UserEntity> | null {
        return await this.userRepository.findOne({ where: { name: name } });
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

    async updateUserRt(updateUserRtInput: UpdateUserRtInput): Promise<UserEntity> {
        const result = await this.userRepository.update({ id: updateUserRtInput.id }, { ...updateUserRtInput });
        console.log(result);
        
        return await this.getOneUser(updateUserRtInput.id);
    }
}
