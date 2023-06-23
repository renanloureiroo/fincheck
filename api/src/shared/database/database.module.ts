import { Module } from '@nestjs/common';
import { UsersRepository } from './repositories/UsersRepository/users.repositories';
import { PrismaService } from './prisma.service';

@Module({
  providers: [UsersRepository, PrismaService],
  exports: [UsersRepository],
})
export class DatabaseModule {}
