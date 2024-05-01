import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsInt, IsNumber, IsString, IsDate, IsObject, ArrayMinSize, ValidateNested, IsArray } from 'class-validator';

class DiscountDto {
    @IsString()
    codePromo: string;

    @IsNumber()
    discountMontant: number;
}

class ReglementDto {
    @IsString()
    payementMode: string;

    @IsNumber()
    payementAmount: number;
}

class commandeProductDto {
    @IsString()
    barcode: string;

    @IsString()
    name: string;

    @IsNumber()
    UnitPrice: number;

    @IsNumber()
    qte: number;

    @ValidateNested()
    @Type(() => DiscountDto)
    promoDiscount: DiscountDto;

    @IsNumber()
    totalPriceProd: number;

    @IsNumber()
    pointFidProd: number;
}

// ** Creating Commande
export class CreateCommandeDto {

    id: number;

    @IsString()
    @IsOptional()
    bornID?: string;

    @IsString()
    @IsOptional()
    dateCommande?: Date;

    @IsString()
    @IsOptional()
    client_id?: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested()
    @Type(() => commandeProductDto) // Specify the type as Object since the structure is dynamic
    Products: commandeProductDto;
    // @IsNotEmpty()
    // @ValidateNested({ each: true })
    // @Type(() => commandeProductDto)
    // Products: commandeProductDto[]

    @ValidateNested()
    @Type(() => DiscountDto)
    @IsOptional()
    globalDiscount?: DiscountDto;

    @IsNumber()
    @IsOptional()
    pointFidTotal?: number;

    @IsNumber()
    totalPrice: number;

    @IsString()
    @IsOptional()
    deviseCode?: string;

    @ValidateNested()
    @Type(() => ReglementDto)
    @IsArray()
    @IsOptional()
    reglement?: ReglementDto;
}

