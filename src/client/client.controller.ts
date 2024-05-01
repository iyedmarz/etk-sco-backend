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

  @Get('cin/:cin')
  findByCin(@Param('cin') cin: string) {
    return this.clientService.findByCin(cin);
  }

  @Get('phone/:num_tel')
  findByPhone(@Param('num_tel') num_tel: number) {
    return this.clientService.findByPhone(num_tel);
  }

  @Get('qr/:num_cartfid')
  findByNum_CartFid(@Param('num_cartfid') num_cartfid: string) {
    return this.clientService.findByNum_CartFid(num_cartfid);
  }

  @Get('qr/:qr_code')
  findByQRCode(@Param('qr_code') qr_code: string) {
    return this.clientService.findByQRCode(qr_code);
  }

  @Patch(':cin')
  update(@Param('cin') cin: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(cin, updateClientDto);
  }

  @Delete(':cin')
  remove(@Param('cin') cin: string) {
    return this.clientService.remove(cin);
  }

}
