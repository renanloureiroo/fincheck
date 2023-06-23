import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { PrismaService } from 'src/database/prisma.service';
import { BcryptJsService } from 'src/encrypt/bcrypt-js/bcrypt-js.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, BcryptJsService],
})
export class UsersModule {}
