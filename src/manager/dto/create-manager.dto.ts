import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateManagerDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    name: string;

    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    accessCode: string;
}