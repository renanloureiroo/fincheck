import { PrismaService } from 'src/shared/database/prisma.service';
import { User } from 'src/modules/users/entities/user.entity';
import { CreateDTO, IUsersRepository } from './user.repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUnique(where: { email?: string; id?: string }): Promise<User> {
    return this.prismaService.user.findUnique({
      where,
    });
  }
  create(data: CreateDTO): Promise<User> {
    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        categories: {
          createMany: {
            data: [...data.categories],
          },
        },
      },
    });
  }
}
