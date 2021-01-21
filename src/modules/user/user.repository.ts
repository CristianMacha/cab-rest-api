import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import * as rethink from 'rethinkdb';

import { Rethink } from '../../rethink/rethink';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UserRepository {
  table: rethink.Table;
  constructor(private db: Rethink) {
    this.table = rethink.table('user');
  }

  async create(createUserDto: CreateUserDto) {
    const result = await rethink
      .table('user')
      .insert([createUserDto])
      .run(await this.db.connection());
    return result;
  }

  async findByEmail(email: string) {
    const result = await this.table
      .filter(rethink.row('email').eq(email))
      .run(await this.db.connection());

    const cursor = await result.toArray();
    return plainToClass(User, cursor[0]);
  }
}
