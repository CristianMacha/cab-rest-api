import { Body, Controller, Post } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';

import { CreateTableDto } from './dto/rethink.dto';
import { RethinkService } from './rethink.service';

@Controller('rethink')
export class RethinkController {
  constructor(private rethinkServices: RethinkService) {}

  @Post('table')
  async createTable(
    @Body(new ValidationPipe()) createTableDto: CreateTableDto,
  ) {
    const response = await this.rethinkServices.createTable(
      createTableDto.name,
    );
    return response;
  }
}
