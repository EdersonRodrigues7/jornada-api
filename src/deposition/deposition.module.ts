import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositionService } from './deposition.service';
import { DepositionController } from './deposition.controller';
import { Deposition } from './entities/deposition.entity';
import { DepositionHomeController } from './deposition-home.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Deposition])],
  controllers: [DepositionController, DepositionHomeController],
  providers: [DepositionService]
})
export class DepositionsModule { }
