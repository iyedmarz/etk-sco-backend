import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { ManagerService } from '../manager/manager.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly clientService: ClientService,
        private readonly managerService: ManagerService,
        private readonly jwtService: JwtService,
    ) { }

    async validatecin(cin: string): Promise<any> {
        const client = await this.clientService.findByCin(cin);
        if (client) {
            return {
                pts_fidality: client.pts_Fidality,
                id: client.id
            }
        }
        return null;
    }
    async validateCode(accessCode: string): Promise<any> {
        const manager = await this.managerService.findByCode(accessCode);
        if (manager) {
            return {
                name: manager.name,
                id: manager.id
            }
        }
        return null;
    }

    async generateJwtToken(payload: any): Promise<string> {
        return this.jwtService.sign(payload);
    }
}
