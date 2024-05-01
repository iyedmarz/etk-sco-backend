import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) { }



  @Post()
  create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandeService.create(createCommandeDto);
  }

  @Get()
  findAll() {
    return this.commandeService.findAll();
  }

  @Post('/delAll')
  deleteAll() {
    return this.commandeService.remove();
  }
}
