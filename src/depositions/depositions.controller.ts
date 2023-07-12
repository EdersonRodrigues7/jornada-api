import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { DepositionsService } from './depositions.service';
import { CreateDepositionDto } from './dto/create-deposition.dto';
import { UpdateDepositionDto } from './dto/update-deposition.dto';
import { Deposition } from './entities/deposition.entity';

@Controller('depositions')
export class DepositionsController {
  constructor(private readonly depositionsService: DepositionsService) { }

  @Post()
  create(@Body() createDepositionDto: CreateDepositionDto) {
    const deposition = new Deposition();

    deposition.content = createDepositionDto.content;
    deposition.image = createDepositionDto.image;
    deposition.username = createDepositionDto.username;

    this.depositionsService.create(deposition);

    return {
      message: "Deposition created successfully"
    };
  }

  @Get()
  findAll() {
    return this.depositionsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.depositionsService.findOne(+id);
  }

  @Get('/:home')
  list() {
    return this.depositionsService.listDepositions();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateDepositionDto: UpdateDepositionDto,
  ) {
    const updatedDeposition = await this.depositionsService.update(+id, updateDepositionDto);
    return {
      updated: updatedDeposition,
      message: "Deposition updated successfully!"
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.depositionsService.remove(+id);
    return {
      message: "Deposition deleted successfully"
    };
  }
}
