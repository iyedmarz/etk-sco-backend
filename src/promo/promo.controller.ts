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

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.promoService.findOne(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() updatePromoDto: UpdatePromoDto) {
    return this.promoService.update(code, updatePromoDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.promoService.remove(code);
  }
}
