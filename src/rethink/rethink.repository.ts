import { Injectable } from '@nestjs/common';
import * as rethink from 'rethinkdb';

import { Rethink } from './rethink';

@Injectable()
export class RethinkRepository {
  constructor(private conn: Rethink) {}

  async createTable(nameTable: string) {
    const result = await rethink
      .db('test')
      .tableCreate(nameTable)
      .run(await this.conn.connection());

    return result;
  }
}
