import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client) private readonly ClientRepository: Repository<Client>,
  ) { }

  create(createClientDto: CreateClientDto): Promise<Client> {
    const client: Client = new Client();
    client.num_tel = createClientDto.num_tel;
    client.qr_code = createClientDto.qr_code;
    client.nom = createClientDto.nom;
    client.addresse = createClientDto.addresse;
    client.code_postal = createClientDto.code_postal;
    return this.ClientRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.ClientRepository.find();
  }

  findOne(num_tel: number) {
    return this.ClientRepository.findOneBy({ num_tel });
  }

  update(num_tel: number, updateClientDto: UpdateClientDto): Promise<Client> {
    const client: Client = new Client();
    client.num_tel = num_tel;
    client.qr_code = updateClientDto.qr_code;
    client.nom = updateClientDto.nom;
    client.addresse = updateClientDto.addresse;
    client.code_postal = updateClientDto.code_postal;
    return this.ClientRepository.save(client);
  }

  remove(num_tel: number) {
    return this.ClientRepository.delete({ num_tel });
  }
}
