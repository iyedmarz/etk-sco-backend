import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { Manager } from './entities/manager.entity';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) { }

  @Post()
  create(@Body() createPromoDto: CreateManagerDto) {
    return this.managerService.create(createPromoDto);
  }

  @Get()
  findAll() {
    return this.managerService.findAll();
  }

  @Get('code/:accessCode')
  findOneByCode(@Param('accessCode') accessCode: string) {
    return this.managerService.findByCode(accessCode);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateManagerDto: UpdateManagerDto) {
    return this.managerService.update(id, updateManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerService.remove(id);
  }
}

