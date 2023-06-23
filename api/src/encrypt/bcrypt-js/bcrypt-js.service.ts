import { IEncrypt } from './../encrypt.interface';
import { Injectable } from '@nestjs/common';

import { hash, compare } from 'bcryptjs';

@Injectable()
export class BcryptJsService implements IEncrypt {
  encrypt(value: string) {
    return hash(value, 12);
  }
  compare(value: string, hash: string) {
    return compare(value, hash);
  }
}
