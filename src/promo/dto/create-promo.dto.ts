import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

export class CreatePromoDto {

    @IsNotEmpty()
    @IsString()
    codePromo: string;

    @IsNotEmpty()
    @IsString()
    libelle: string;

    @IsNotEmpty()
    @IsNumber()
    percentage: number;

    @IsNotEmpty()
    @IsInt()
    totalNumberOfUse: number;

    @IsNotEmpty()
    @IsInt()
    leftToUse: number;

    @IsNotEmpty()
    @IsString()
    offerDate: Date;

    @IsNotEmpty()
    @IsString()
    offerValidity: Date;

    @IsNotEmpty()
    @IsString()
    offeredBybrand: string;

    @IsNotEmpty()
    @IsString()
    uuidBrand: string;
}
