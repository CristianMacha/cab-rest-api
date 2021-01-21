import { Injectable } from '@nestjs/common';

import { RethinkRepository } from './rethink.repository';

@Injectable()
export class RethinkService {
  constructor(private rethinkRepository: RethinkRepository) {}

  async createTable(nameTable: string) {
    const result = await this.rethinkRepository.createTable(nameTable);
    return result;
  }
}
