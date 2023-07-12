import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { DepositionService } from './deposition.service';
import { CreateDepositionDto } from './dto/create-deposition.dto';
import { UpdateDepositionDto } from './dto/update-deposition.dto';
import { Deposition } from './entities/deposition.entity';

@Controller('depositions')
export class DepositionController {
  constructor(private readonly depositionService: DepositionService) { }

  @Post()
  create(@Body() createDepositionDto: CreateDepositionDto) {
    const deposition = new Deposition();

    deposition.content = createDepositionDto.content;
    deposition.image = createDepositionDto.image;
    deposition.username = createDepositionDto.username;

    this.depositionService.create(deposition);

    return {
      message: "Deposition created successfully"
    };
  }

  @Get()
  findAll() {
    return this.depositionService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.depositionService.findOne(+id);
  }

  @Get('/:home')
  list() {
    return this.depositionService.listDepositions();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateDepositionDto: UpdateDepositionDto,
  ) {
    const updatedDeposition = await this.depositionService.update(+id, updateDepositionDto);
    return {
      updated: updatedDeposition,
      message: "Deposition updated successfully!"
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    await this.depositionService.remove(+id);
    return {
      message: "Deposition deleted successfully"
    };
  }
}
