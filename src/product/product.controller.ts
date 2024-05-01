import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':barcode')
  findOne(@Param('barcode') barcode: string) {
    return this.productService.findOne(barcode);
  }

  @Patch(':barcode')
  update(@Param('barcode') barcode: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(barcode, updateProductDto);
  }

  @Delete(':barcode')
  remove(@Param('barcode') barcode: string) {
    return this.productService.remove(barcode);
  }
}
