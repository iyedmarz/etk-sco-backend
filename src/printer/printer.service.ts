import { Injectable } from '@nestjs/common';
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
  BreakLine,
} from "node-thermal-printer";

@Injectable()
export class PrinterService {

  public Aures = "./aures.png"
  async printTicket(): Promise<void> {
    const printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: "tcp://192.168.2.215",
      lineCharacter: '=',
      breakLine: BreakLine.WORD,
      characterSet: CharacterSet.PC852_LATIN2,
      removeSpecialCharacters: false,
    });

    const connect = printer.isPrinterConnected();
    console.log(connect);

    // printer.alignCenter();
    await printer.printImage(this.Aures);  // Print PNG image
    // printer.println("Welcome To  AURES !!!");
    // printer.drawLine();
    // printer.leftRight("Product", "$$$$");
    // printer.leftRight("Product", "$$$$");
    // printer.leftRight("Product", "$$$$");
    // printer.leftRight("Product", "$$$$");
    // printer.drawLine();
    // printer.leftRight("Discount", "$$$$")
    // printer.leftRight("Total", "$$$$")
    // printer.drawLine();
    // printer.println("THANK YOU")
    printer.tableCustom([                               // Prints table with custom settings (text, align, width, bold)
      { text: "Left", align: "LEFT", width: 0.29 },
      { text: "Center", align: "CENTER", width: 0.29, bold: true },
      { text: "Right", align: "RIGHT", width: 0.29 }
    ]);

    printer.cut();

    const execute = await printer.execute();
    printer.clear();

  }

}