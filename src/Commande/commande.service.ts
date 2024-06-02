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
    commande.dateCommande = dateCommande
    commande.client_id = createCommandeDto.client_id
    commande.Products = createCommandeDto.Products
    commande.globalDiscount = createCommandeDto.globalDiscount
    commande.pointFidTotal = createCommandeDto.pointFidTotal
    commande.totalPrice = createCommandeDto.totalPrice
    commande.reglement = createCommandeDto.reglement
    const savedCommande = await this.commandeRepository.save(commande);
    commande.id = savedCommande.id;
    commande.bornID = savedCommande.bornID;
    commande.deviseCode = savedCommande.deviseCode;
    // await this.productStock(commande)
    // await this.printTicket(commande)
    return savedCommande;
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

  async productStock(commande: Commande): Promise<void> {
    // for (const product of commande.Products) {
    //   await axios.post(`http://products-api/products/${product.id}/decrement-quantity`, {
    //     quantity: product.quantity
    //   });
    // }
  }

  async promovalidity(): Promise<void> {

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

    printer.alignCenter();
    // printer.printImage("./aures.png")
    printer.println("AURES Groupe");
    printer.newLine();
    printer.code128(`${commande.id}`);
    printer.newLine();
    printer.alignLeft();
    printer.println(`Ticket n°${commande.id} du ${commande.dateCommande}`);
    printer.println(`Caisse : ${commande.bornID}`);
    printer.println(`Client : ${commande.client_id}`);
    printer.newLine();
    printer.tableCustom([
      { text: "Article", align: "LEFT", width: 0.5 },
      { text: "Qté", align: "CENTER", width: 0.2 },
      { text: "Prix", align: "RIGHT", width: 0.3 }
    ]);
    printer.drawLine();
    let nbrProd = 0
    const len = commande.Products.length
    for (let i = 0; i < len; i++) {
      printer.tableCustom([
        { text: `${commande.Products[i].name}`, align: "LEFT", width: 0.5 },
        { text: `${commande.Products[i].qte}`, align: "CENTER", width: 0.2 },
        { text: `${commande.Products[i].totalPriceProd}`, align: "RIGHT", width: 0.3 }
      ]);
      nbrProd += commande.Products[i].qte
    }

    printer.newLine();
    printer.drawLine();
    printer.newLine();
    printer.leftRight("Nombres d'articles", `${nbrProd} `)
    printer.leftRight("Total en Euro", `${commande.totalPrice} `)
    printer.newLine();
    printer.drawLine();
    printer.newLine();
    printer.alignCenter();
    printer.println("THANK YOU")

    printer.cut();

    const execute = await printer.execute();
    printer.clear();

  }
}
