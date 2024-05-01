import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { Commande } from './entities/commande.entity';
import { BreakLine, CharacterSet, PrinterTypes, ThermalPrinter } from 'node-thermal-printer';

@Injectable()
export class CommandeService {

  constructor(
    @InjectRepository(Commande) private readonly commandeRepository: Repository<Commande>,
  ) { }


  async create(createCommandeDto: CreateCommandeDto): Promise<Commande> {
    const commande: Commande = new Commande();
    const dateCommande = new Date();
    commande.id = createCommandeDto.id
    commande.bornID = createCommandeDto.bornID
    commande.dateCommande = dateCommande
    commande.client_id = createCommandeDto.client_id
    commande.Products = createCommandeDto.Products
    commande.globalDiscount = createCommandeDto.globalDiscount
    commande.pointFidTotal = createCommandeDto.pointFidTotal
    commande.totalPrice = createCommandeDto.totalPrice
    commande.reglement = createCommandeDto.reglement
    this.printTicket(commande)
    return this.commandeRepository.save(commande);
  }

  findAll(): Promise<Commande[]> {
    return this.commandeRepository.find();
  }

  findById(id: number): Promise<Commande> {
    return this.commandeRepository.findOneBy({ id });
  }

  findByClientId(client_id: string): Promise<Commande> {
    return this.commandeRepository.findOneBy({ client_id });
  }

  async remove(): Promise<void> {
    await this.commandeRepository.query('DELETE FROM Commande');
  }

  async printTicket(commande: Commande): Promise<void> {
    const printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: "tcp://192.168.2.215",
      width: 42,
      lineCharacter: '-',
      breakLine: BreakLine.WORD,
      characterSet: CharacterSet.PC852_LATIN2,
      removeSpecialCharacters: false
    });

    const connect = printer.isPrinterConnected();
    console.log(connect);

    // const jsonObject = ;

    printer.alignCenter();
    // await printer.printImage(this.Aures);  // Print PNG image
    console.log("commande id :", commande)
    printer.println(`${commande.client_id}`);
    printer.drawLine();
    printer.leftRight("Product", "$$$$");
    printer.drawLine();
    printer.leftRight("Discount", `${commande.globalDiscount} `)
    printer.leftRight("Total", `${commande.totalPrice} `)
    printer.drawLine();
    printer.println("THANK YOU")


    printer.drawLine()

    printer.cut();

    // const execute = await printer.execute();
    // printer.clear();

  }
}
