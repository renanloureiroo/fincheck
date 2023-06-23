import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { BcryptJsService } from './encrypt/bcrypt-js/bcrypt-js.service';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [BcryptJsService],
})
export class AppModule {}
