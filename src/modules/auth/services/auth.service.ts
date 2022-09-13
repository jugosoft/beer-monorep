import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/modules/users/entities/user.entity';
import { UserService } from 'src/modules/users/services/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: UserEntity = await this.usersService.getOneUserByName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
