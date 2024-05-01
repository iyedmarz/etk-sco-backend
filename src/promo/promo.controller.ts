import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromoService } from './promo.service';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';

@Controller('promo')
export class PromoController {
  constructor(private readonly promoService: PromoService) { }

  @Post()
  create(@Body() createPromoDto: CreatePromoDto) {
    return this.promoService.create(createPromoDto);
  }

  @Get()
  findAll() {
    return this.promoService.findAll();
  }

  @Get(':codePromo')
  findOne(@Param('codePromo') codePromo: string) {
    return this.promoService.findOne(codePromo);
  }

  @Patch(':codePromo')
  update(@Param('codePromo') codePromo: string, @Body() updatePromoDto: UpdatePromoDto) {
    return this.promoService.update(codePromo, updatePromoDto);
  }

  @Delete(':codePromo')
  remove(@Param('codePromo') codePromo: string) {
    return this.promoService.remove(codePromo);
  }
}
