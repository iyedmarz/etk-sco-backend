import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsString,
    Min,
    MinLength,
} from 'class-validator';

export class CreateProductDto {

    @IsString()
    @MinLength(13, { message: 'barcode must have 13 characters.' })
    @IsNotEmpty()
    barcode: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Ur name must have atleast 2 characters.' })
    brand: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Ur name must have atleast 2 characters.' })
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    priceUnit: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    quantity: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    pts_fid: number;
}
