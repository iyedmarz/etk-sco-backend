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

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.commandeService.findById(id);
  }


  @Get(':client_id')
  findByClientId(@Param('client_id') client_id: string) {
    return this.commandeService.findByClientId(client_id);
  }

  @Post('/delAll')
  deleteAll() {
    return this.commandeService.remove();
  }
}
