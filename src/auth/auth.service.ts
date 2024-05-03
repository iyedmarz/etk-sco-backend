import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly clientService: ClientService,
        private readonly jwtService: JwtService,
    ) { }

    async validatePhone(num_tel: number): Promise<any> {
        const client = await this.clientService.findByPhone(num_tel);
        if (client) {
            return { num_tel: client.num_tel }
        }
        return null;
    }


    async generateJwtToken(payload: any): Promise<string> {
        return this.jwtService.sign(payload);
    }
}
