import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt'; 

import { crypt } from 'constants/crypt';

@Injectable()
export class CryptoService {
  async hash(input: string): Promise<string> {
    return await hash(input, crypt.saltRounds);
  }

  async verify(input: string, hash: string) {
    return await compare(input, hash);
  }
}
