import { Injectable } from '@nestjs/common';
import * as rethink from 'rethinkdb';

@Injectable()
export class Rethink {
  async connection() {
    const conn = await rethink.connect({
      host: '104.131.186.59',
      port: 28015,
      db: 'test',
    });
    return conn;
  }
}
