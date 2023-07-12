import { IsNotEmpty, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDepositionDto } from './create-deposition.dto';

export class UpdateDepositionDto extends PartialType(CreateDepositionDto) {
    @IsNotEmpty({ message: "O conteúdo não pode ser vazio" })
    @IsOptional()
    content: string;

    @IsOptional()
    image: BinaryType;

    @IsNotEmpty({ message: "O nome não pode ser vazio" })
    @IsOptional()
    username?: string;

}
