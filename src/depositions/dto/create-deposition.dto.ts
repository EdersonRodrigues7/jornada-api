import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateDepositionDto {
    @IsNotEmpty({ message: 'O conteúdo não pode ser vazio' })
    content: string;

    image: BinaryType;

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    username: string;
}
