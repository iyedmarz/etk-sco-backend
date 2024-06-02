import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from "./product/entities/product.entity";
import { Promo } from "./promo/entities/promo.entity";
import { PromoModule } from './promo/promo.module';
import { LedModule } from './led/led.module';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { AuthModule } from './auth/auth.module';
import { PrinterModule } from './printer/printer.module';
import { CommandeModule } from './Commande/commande.module';
import { Commande } from './Commande/entities/commande.entity';
// import { PaymentModule } from './payment/payment.module';
import { ManagerModule } from './manager/manager.module';
import { Manager } from './manager/entities/manager.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '120102',
      username: 'postgres',
      entities: [Product, Promo, Client, Commande, Manager],
      database: 'etk-sco',
      synchronize: true,
      logging: true,
    }),
    ProductModule,
    PromoModule,
    LedModule,
    ClientModule,
    AuthModule,
    PrinterModule,
    CommandeModule,
    // PaymentModule,
    ManagerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
