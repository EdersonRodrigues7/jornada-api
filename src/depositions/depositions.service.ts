import { Injectable } from '@nestjs/common';
import { CreateDepositionDto } from './dto/create-deposition.dto';
import { UpdateDepositionDto } from './dto/update-deposition.dto';

@Injectable()
export class DepositionsService {
  create(createDepositionDto: CreateDepositionDto) {
    return 'This action adds a new deposition';
  }

  findAll() {
    return `This action returns all depositions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deposition`;
  }

  update(id: number, updateDepositionDto: UpdateDepositionDto) {
    return `This action updates a #${id} deposition`;
  }

  remove(id: number) {
    return `This action removes a #${id} deposition`;
  }
}
