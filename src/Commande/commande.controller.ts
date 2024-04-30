import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) { }



  @Post()
  create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandeService.create(createCommandeDto);
  }

  @Get()
  findAll() {
    return this.commandeService.findAll();
  }

  @Post('/all')
  deleteAll() {
    return this.commandeService.remove();
  }

  // @Get(':barcode')
  // findOne(@Param('barcode') barcode: string) {
  //   return this.productService.findOne(barcode);
  // }

  // @Patch(':barcode')
  // update(@Param('barcode') barcode: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(barcode, updateProductDto);
  // }

  // @Delete(':barcode')
  // remove(@Param('barcode') barcode: string) {
  //   return this.productService.remove(barcode);
  // }
}
