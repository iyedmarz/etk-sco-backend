import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateClientDto {
    @IsNotEmpty()
    @IsInt()
    id: string;

    @IsNotEmpty()
    @IsInt()
    num_tel: number;

    @IsNotEmpty()
    @IsString()
    qr_code: string;

    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    addresse: string;

    @IsString()
    @IsNotEmpty()
    code_postal: string;
}
