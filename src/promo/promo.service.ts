import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { Promo } from './entities/promo.entity';

@Injectable()
export class PromoService {

  constructor(
    @InjectRepository(Promo) private readonly PromoRepository: Repository<Promo>,
  ) { }

  async create(createPromoDto: CreatePromoDto): Promise<Promo> {
    const existingPromo = await this.findOne(createPromoDto.codePromo);
    if (existingPromo) {
      throw new Error("Promotion Already Exists");
    }
    const promo: Promo = new Promo();
    promo.codePromo = createPromoDto.codePromo
    promo.libelle = createPromoDto.libelle
    promo.percentage = createPromoDto.percentage
    promo.totalNumberOfUse = createPromoDto.totalNumberOfUse
    promo.leftToUse = createPromoDto.leftToUse
    promo.offerDate = createPromoDto.offerDate
    promo.offerValidity = createPromoDto.offerValidity
    promo.offeredBybrand = createPromoDto.offeredBybrand
    return this.PromoRepository.save(promo);
  }

  findAll(): Promise<Promo[]> {
    return this.PromoRepository.find();
  }

  findOne(codePromo: string): Promise<Promo> {
    return this.PromoRepository.findOneBy({ codePromo });
  }

  async update(codePromo: string, updatePromoDto: UpdatePromoDto): Promise<Promo> {
    const promo = await this.PromoRepository.findOneBy({ codePromo });
    if (!promo) {
      throw new NotFoundException('promo not found');
    }
    Object.assign(promo, updatePromoDto);
    return this.PromoRepository.save(promo);
  }


  remove(codePromo: string): Promise<{ affected?: number }> {
    return this.PromoRepository.delete(codePromo);
  }
}

