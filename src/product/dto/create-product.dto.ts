import {
    IsInt,
    IsNotEmpty,
    IsString,
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
    name: string;

    @IsNotEmpty()
    @IsInt()
    price: number;

    @IsInt()
    quantity: number;
}
