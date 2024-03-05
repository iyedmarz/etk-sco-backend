import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product = new Product();
    product.barcode = createProductDto.barcode;
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    product.quantity = createProductDto.quantity;
    return this.productRepository.save(product);
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  /**
     * this function used to get data of use whose id is passed in parameter
     * @param id is type of number, which represent the id of user.
     * @returns promise of user
     */
  findOne(barcode: string): Promise<Product> {
    return this.productRepository.findOneBy({ barcode });
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  update(barcode: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product: Product = new Product();
    product.barcode = barcode;
    product.name = updateProductDto.name;
    product.price = updateProductDto.price;
    product.quantity = updateProductDto.quantity;
    return this.productRepository.save(product);
  }

  /**
     * this function is used to remove or delete user from database.
     * @param id is the type of number, which represent id of user
     * @returns nuber of rows deleted or affected
     */
  remove(barcode: string): Promise<{ affected?: number }> {
    return this.productRepository.delete(barcode);
  }
}
