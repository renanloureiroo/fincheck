import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { BcryptJsService } from 'src/shared/encrypt/bcrypt-js/bcrypt-js.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, BcryptJsService],
})
export class UsersModule {}
