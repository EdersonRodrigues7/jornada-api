import { PartialType } from '@nestjs/mapped-types';
import { CreateDepositionDto } from './create-deposition.dto';

export class UpdateDepositionDto extends PartialType(CreateDepositionDto) {}
