import { Module } from '@nestjs/common';
import { RethinkService } from './rethink.service';

import { Rethink } from './rethink';
import { RethinkController } from './rethink.controller';
import { RethinkRepository } from './rethink.repository';

@Module({
  providers: [RethinkService, Rethink, RethinkRepository],
  controllers: [RethinkController],
  exports: [Rethink]
})
export class RethinkModule {}
