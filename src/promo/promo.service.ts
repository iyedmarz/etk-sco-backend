import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { Promo } from './entities/promo.entity';

@Injectable()
export class PromoService {

  /**
   * Here, we have used data mapper approch for this tutorial that is why we
   * injecting repository here. Another approch can be Active records.
   */
  constructor(
    @InjectRepository(Promo) private readonly PromoRepository: Repository<Promo>,
  ) { }

  /**
   * this is function is used to create User in User Entity.
   * @param createUserDto this will type of createUserDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of user
   */
  create(createPromoDto: CreatePromoDto): Promise<Promo> {
    const promo: Promo = new Promo();
    promo.code = createPromoDto.code;
    promo.promotion = createPromoDto.promotion;
    return this.PromoRepository.save(promo);
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAll(): Promise<Promo[]> {
    return this.PromoRepository.find();
  }

  /**
     * this function used to get data of use whose id is passed in parameter
     * @param id is type of number, which represent the id of user.
     * @returns promise of user
     */
  findOne(code: string): Promise<Promo> {
    return this.PromoRepository.findOneBy({ code });
  }

  /**
   * this function is used to updated specific user whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  update(code: string, updatePromoDto: UpdatePromoDto): Promise<Promo> {
    const promo: Promo = new Promo();
    promo.code = code;
    promo.promotion = updatePromoDto.promotion;
    return this.PromoRepository.save(promo);
  }

  /**
     * this function is used to remove or delete user from database.
     * @param id is the type of number, which represent id of user
     * @returns nuber of rows deleted or affected
     */
  remove(code: string): Promise<{ affected?: number }> {
    return this.PromoRepository.delete(code);
  }
}

