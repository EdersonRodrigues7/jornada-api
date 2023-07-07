import { Module } from '@nestjs/common';
import { DepositionsService } from './depositions.service';
import { DepositionsController } from './depositions.controller';

@Module({
  controllers: [DepositionsController],
  providers: [DepositionsService]
})
export class DepositionsModule {}
