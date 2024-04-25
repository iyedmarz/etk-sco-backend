// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../client/entities/client.entity';
import { ClientService } from '../client/client.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Client]),
        JwtModule.register({
            secret: 'just_a_key', // Directly put the secret key
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, ClientService],
    controllers: [AuthController],
})
export class AuthModule { }
