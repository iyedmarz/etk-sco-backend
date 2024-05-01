import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
  ) { }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const existingClient = await this.findByCin(createClientDto.cin);
    if (existingClient) {
      throw new Error("Client Already Exists");
    }
    const client: Client = new Client();
    client.cin = createClientDto.cin;
    client.id = createClientDto.id;
    client.num_tel = createClientDto.num_tel;
    client.num_cartfid = createClientDto.num_cartfid;
    client.qr_code = createClientDto.qr_code;
    client.nom = createClientDto.nom;
    client.addresse = createClientDto.addresse;
    client.code_postal = createClientDto.code_postal;
    client.pts_Fidality = createClientDto.pts_Fidality;
    return this.clientRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOneBy({ id });
  }

  findByCin(cin: string) {
    return this.clientRepository.findOneBy({ cin });
  }

  findByPhone(num_tel: number) {
    return this.clientRepository.findOneBy({ num_tel });
  }

  findByNum_CartFid(num_cartfid: string) {
    return this.clientRepository.findOneBy({ num_cartfid });
  }

  findByQRCode(qr_code: string) {
    return this.clientRepository.findOneBy({ qr_code });
  }

  async update(cin: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.clientRepository.findOneBy({ cin });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    Object.assign(client, updateClientDto);
    return this.clientRepository.save(client);
  }

  remove(cin: string) {
    return this.clientRepository.delete({ cin });
  }

}
