import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('phone')
    async authenticateWithPhone(@Body() body: { num_tel: number }): Promise<any> {
        if (!body.num_tel) {
            throw new HttpException('Phone number is required', HttpStatus.BAD_REQUEST);
        }
        const payload = await this.authService.validatePhone(body.num_tel);
        console.log(payload)
        if (!payload) {
            throw new HttpException('Invalid phone number', HttpStatus.UNAUTHORIZED);
        } else {
            const token = await this.authService.generateJwtToken(payload);
            return { token };
        }


    }

    @Post('qrCode')
    async authenticateWithQRCode(@Body() body: { qrCode: string }): Promise<any> {
        const payload = await this.authService.validateQRCode(body.qrCode);
        const token = await this.authService.generateJwtToken(payload);
        return { token };
    }
}
