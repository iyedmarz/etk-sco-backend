import { Controller, Post, Get } from '@nestjs/common';
import { PrinterService } from './printer.service';

@Controller('printer')
export class PrinterController {
  constructor(private readonly PrinterService: PrinterService) { }

  // locahost:5000/printer/test
  @Post()
  async print(): Promise<void> {
    await this.PrinterService.printTicket();
  }

}


