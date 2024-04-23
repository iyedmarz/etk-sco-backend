import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':num_tel')
  findOne(@Param('num_tel') num_tel: number) {
    return this.clientService.findOne(num_tel);
  }

  @Patch(':num_tel')
  update(@Param('num_tel') num_tel: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(num_tel, updateClientDto);
  }

  @Delete(':num_tel')
  remove(@Param('num_tel') num_tel: number) {
    return this.clientService.remove(num_tel);
  }
}
