import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserEntity } from 'src/modules/users/entities/user.entity';
import { CreateUserInput } from 'src/modules/users/inputs/create-user.input';
import { UserService } from 'src/modules/users/services/user/user.service';
import { CryptoService } from './crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private cryptoService: CryptoService,
    private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<boolean> {
    const user: UserEntity = await this.usersService.getOneUserByName(username);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }

  async login(username: string) {
    const payload = { username: username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserInput: CreateUserInput) {
    createUserInput.password = await this.cryptoService.hash(createUserInput.password);
    const user = await this.usersService.createUser(createUserInput);
    return await this.login(user.name);
  }
}
