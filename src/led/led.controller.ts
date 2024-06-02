import { Controller, Post, Get } from '@nestjs/common';
import { LedService } from './led.service';

const RazLedGreen = [0x02, 0x1b, 0x20, 0x00, 0x03];
const RazLedRed = [0x02, 0x1b, 0x21, 0x00, 0x03];
const RazLedOrange = [0x02, 0x1b, 0x22, 0x00, 0x03];

const GreenColorLed = [0x02, 0x1b, 0x20, 0xc0, 0x03];
const RedColorLed = [0x02, 0x1b, 0x21, 0xc0, 0x03]
const OrangeColorLed = [0x02, 0x1b, 0x22, 0xc0, 0x03];

@Controller('led')
export class LedController {
  constructor(private readonly ledService: LedService) { }

  // // locahost:5000/led/red (on)
  // @Post('red')
  // async setRedColor(): Promise<void> {
  //   await this.ledService.setLedColor(RedColorLed);
  // }

  // // locahost:5000/led/orange (on)
  // @Post('orange')
  // async setOrangeColor(): Promise<void> {
  //   await this.ledService.setLedColor(OrangeColorLed);
  // }

  // // locahost:5000/led/green (on)
  // @Post('green')
  // async setGreenColor(): Promise<void> {
  //   await this.ledService.setLedColor(GreenColorLed);
  // }

  // // locahost:5000/led/redoff (off)
  // @Post('redoff')
  // async setRedOffColor(): Promise<void> {
  //   await this.ledService.setLedColor(RazLedRed);
  // }

  // // locahost:5000/led/orangeoff (off)
  // @Post('orangeoff')
  // async setOrangeOffColor(): Promise<void> {
  //   await this.ledService.setLedColor(RazLedOrange);
  // }

  // // locahost:5000/led/greenoff (off)
  // @Post('greenoff')
  // async setGreenOffColor(): Promise<void> {
  //   await this.ledService.setLedColor(RazLedGreen);
  // }
}

