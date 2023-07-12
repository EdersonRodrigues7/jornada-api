import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateDepositionDto } from './dto/update-deposition.dto';
import { Deposition } from './entities/deposition.entity';
import { ListDepositionDto } from './dto/list-deposition.dto';

@Injectable()
export class DepositionsService {
  constructor(
    @InjectRepository(Deposition)
    private readonly depositionRepository: Repository<Deposition>
  ) { }

  async create(deposition: Deposition) {
    await this.depositionRepository.save(deposition);
  }

  async findAll() {
    const depositions = await this.depositionRepository.find();
    const allDepositions = depositions.map(
      (deposition) => new ListDepositionDto(deposition.id, deposition.content, deposition.username)
    );
    return allDepositions;
  }

  async findOne(id: number) {
    const deposition = await this.depositionRepository.findOneBy({ id });
    return deposition;
  }

  async listDepositions() {
    const depositions = await this.depositionRepository.find({
      take: 3,
    });

    const selectedDepositions = depositions.map(
      (deposition) => new ListDepositionDto(deposition.id, deposition.content, deposition.username)
    );
    return selectedDepositions;
  }

  async update(id: number, updateDepositionDto: UpdateDepositionDto) {
    await this.depositionRepository.update(id, updateDepositionDto);
  }

  async remove(id: number) {
    await this.depositionRepository.delete(id);
  }
}
