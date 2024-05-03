import { IsInt, IsNotEmpty, IsOptional, IsString, Length, Max, Min, MinLength } from "class-validator";

export class CreateClientDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'Identity Card must be at least 8 chars long' })
    cin: string;

    id: string;

    @IsNotEmpty()
    @IsInt()
    @Min(10000000, { message: 'num_tel must be at least 8 digits long' })
    @Max(99999999999999, { message: 'num_tel must be at most 14 digits long' })
    num_tel: number;

    @IsOptional()
    @IsString()
    num_cartfid: string;

    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    addresse: string;

    @IsString()
    @IsNotEmpty()
    code_postal: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0, { message: 'fidality points must be positive' })
    pts_Fidality: number;
}
