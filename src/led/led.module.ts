import { Module } from '@nestjs/common';
import { LedService } from './led.service';
import { LedController } from './led.controller';

@Module({
  imports: [],
  controllers: [LedController],
  providers: [LedService],
})
export class LedModule { }

