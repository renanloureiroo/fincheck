import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { BcryptJsService } from 'src/shared/encrypt/bcrypt-js/bcrypt-js.service';
import { UsersRepository } from 'src/shared/database/repositories/UsersRepository/users.repositories';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, BcryptJsService, PrismaService],
})
export class UsersModule {}
