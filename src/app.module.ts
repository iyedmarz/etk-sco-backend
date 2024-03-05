import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from "./product/entities/product.entity";
import { Promo } from "./promo/entities/promo.entity";
import { PromoModule } from './promo/promo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '120102',
      username: 'postgres',
      entities: [Product, Promo],
      database: 'etk-sco',
      synchronize: true,
      logging: true,
    }),
    ProductModule,
    PromoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
