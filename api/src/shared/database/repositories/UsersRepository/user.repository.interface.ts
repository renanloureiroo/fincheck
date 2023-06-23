import { User } from 'src/modules/users/entities/user.entity';

type Category = {
  name: string;
  icon: string;
  type: 'INCOME' | 'EXPENSE';
};

export interface CreateDTO {
  name: string;
  email: string;
  password: string;
  categories: Category[];
}

export interface IUsersRepository {
  create(data: CreateDTO): Promise<User>;
  findUnique(where: { email?: string; id?: string }): Promise<User>;
}
