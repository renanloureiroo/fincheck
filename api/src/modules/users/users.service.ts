import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { BcryptJsService } from 'src/shared/encrypt/bcrypt-js/bcrypt-js.service';
import { UsersRepository } from 'src/shared/database/repositories/UsersRepository/users.repositories';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptService: BcryptJsService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { password, email, name } = createUserDto;

    const emailAlreadyExists = await this.usersRepository.findUnique({
      email,
    });

    if (emailAlreadyExists) {
      throw new ConflictException('This email already in use');
    }
    const hashedPassword = await this.encryptService.encrypt(password);

    const newUser = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
      categories: [
        // Income
        { name: 'Salário', icon: 'salary', type: 'INCOME' },
        { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
        { name: 'Outro', icon: 'other', type: 'INCOME' },
        // Expense
        { name: 'Casa', icon: 'home', type: 'EXPENSE' },
        { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
        { name: 'Educação', icon: 'education', type: 'EXPENSE' },
        { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
        { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
        { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
        { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
        { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
        { name: 'Outro', icon: 'other', type: 'INCOME' },
      ],
    });

    return {
      name: newUser.name,
      email: newUser.email,
    };
  }
}
