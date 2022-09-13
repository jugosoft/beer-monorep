import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt'; 

import { crypt } from 'constants/crypt';

@Injectable()
export class CryptoService {
  async hash(input: string): Promise<string> {
    return await hash(input, crypt.salt);
  }
}
