import {
    IsInt,
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreatePromoDto {

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsInt()
    promotion: number;
}
