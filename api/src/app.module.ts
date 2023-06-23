import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
})
export class AppModule {}
