import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepositionsService } from './depositions.service';
import { CreateDepositionDto } from './dto/create-deposition.dto';
import { UpdateDepositionDto } from './dto/update-deposition.dto';

@Controller('depositions')
export class DepositionsController {
  constructor(private readonly depositionsService: DepositionsService) {}

  @Post()
  create(@Body() createDepositionDto: CreateDepositionDto) {
    return this.depositionsService.create(createDepositionDto);
  }

  @Get()
  findAll() {
    return this.depositionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depositionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepositionDto: UpdateDepositionDto) {
    return this.depositionsService.update(+id, updateDepositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depositionsService.remove(+id);
  }
}
