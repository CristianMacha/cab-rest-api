import { RethinkModule } from '../../rethink/rethink.module';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  imports: [RethinkModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
