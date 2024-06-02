import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manager } from './entities/manager.entity';
import { CreateManagerDto } from './dto/create-manager.dto';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)
    private readonly managerRepository: Repository<Manager>,
  ) { }

  async create(createManagerDto: CreateManagerDto): Promise<Manager> {
    const existingManager = await this.findOne(createManagerDto.accessCode);
    // if (existingManager) {
    //   throw new Error("Promotion Already Exists");
    // }
    const manager: Manager = new Manager();
    manager.name = createManagerDto.name
    manager.accessCode = createManagerDto.accessCode
    return this.managerRepository.save(manager);
  }
  async findAll(): Promise<Manager[]> {
    return this.managerRepository.find();
  }

  async findByCode(accessCode: string): Promise<Manager> {
    const code = await this.managerRepository.findOne({ where: { accessCode } });
    if (!code) {
      throw new NotFoundException(`Access Code ${code} not found`);
    }
    return code;
  }

  async findOne(id: string) {
    // return this.managerRepository.findOne(id);
  }

  async update(id: string, manager: Partial<Manager>): Promise<void> {
    await this.managerRepository.update(id, manager);
  }

  async remove(id: string): Promise<void> {
    await this.managerRepository.delete(id);
  }
}

