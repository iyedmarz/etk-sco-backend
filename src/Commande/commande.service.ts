import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { Commande } from './entities/commande.entity';

@Injectable()
export class CommandeService {

  constructor(
    @InjectRepository(Commande) private readonly commandeRepository: Repository<Commande>,
  ) { }


  async create(createCommandeDto: CreateCommandeDto): Promise<Commande> {
    const commande: Commande = new Commande();
    commande.client_id = createCommandeDto.client_id
    commande.Products = createCommandeDto.Products
    commande.globalDiscount = createCommandeDto.globalDiscount
    commande.pointFidTotal = createCommandeDto.pointFidTotal
    commande.totalPrice = createCommandeDto.totalPrice
    commande.reglement = createCommandeDto.reglement
    return this.commandeRepository.save(commande);
  }

  findAll(): Promise<Commande[]> {
    return this.commandeRepository.find();
  }

}
