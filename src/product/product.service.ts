import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const existingProduct = await this.findOne(createProductDto.barcode);
    if (existingProduct) {
      throw new Error("Product Already Exists");
    }
    const product: Product = new Product();
    product.barcode = createProductDto.barcode;
    product.brand = createProductDto.brand;
    product.name = createProductDto.name;
    product.category = createProductDto.category;
    product.priceUnit = createProductDto.priceUnit;
    product.quantity = createProductDto.quantity;
    product.pts_fid = createProductDto.pts_fid;
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(barcode: string): Promise<Product> {
    return this.productRepository.findOneBy({ barcode });
  }

  async findProductsByQuery(query: string): Promise<Product[]> {
    console.log(query)
    return this.productRepository
      .createQueryBuilder('product')
      .where('product.brand LIKE :query', { query: `%${query}%` })
      .orWhere('product.name LIKE :query', { query: `%${query}%` })
      .orWhere('product.barcode LIKE :query', { query: `%${query}%` })
      .getMany();
  }

  async update(barcode: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOneBy({ barcode });
    if (!product) {
      throw new NotFoundException('product not found');
    }
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  remove(barcode: string): Promise<{ affected?: number }> {
    return this.productRepository.delete(barcode);
  }
}
