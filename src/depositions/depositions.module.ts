import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositionsService } from './depositions.service';
import { DepositionsController } from './depositions.controller';
import { Deposition } from './entities/deposition.entity';
import { DepositionHomeController } from './deposition-home.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Deposition])],
  controllers: [DepositionsController, DepositionHomeController],
  providers: [DepositionsService]
})
export class DepositionsModule { }
