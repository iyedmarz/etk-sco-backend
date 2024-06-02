// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../client/entities/client.entity';
import { ClientService } from '../client/client.service';
import { Manager } from '../manager/entities/manager.entity';
import { ManagerService } from '../manager/manager.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([Client, Manager]),
        JwtModule.register({
            secret: 'just_a_key', // Directly put the secret key
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, ClientService, ManagerService],
    controllers: [AuthController],
})
export class AuthModule { }
