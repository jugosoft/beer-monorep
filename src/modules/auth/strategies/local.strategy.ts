import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { CryptoService } from '../services/crypto.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private cryptoService: CryptoService,
    ) {
    super();
  }

  async validate(username: string, password: string): Promise<boolean> {
    const hashedPassword: string = await this.cryptoService.hash(password);
    const isUserExists = await this.authService.validateUser(username, hashedPassword);
    if (!isUserExists) {
      throw new UnauthorizedException();
    }
    return isUserExists;
  }
}
