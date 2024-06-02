import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('cin')
    async authenticateWithcin(@Body() body: { cin: string }): Promise<any> {
        if (!body.cin) {
            throw new HttpException('cin number is required', HttpStatus.BAD_REQUEST);
        }
        const payload = await this.authService.validatecin(body.cin);
        console.log(payload)
        if (!payload) {
            throw new HttpException('Invalid cin number', HttpStatus.UNAUTHORIZED);
        } else {
            const token = await this.authService.generateJwtToken(payload);
            return {
                token,
                payload
            };
        }
    }

    @Post('manager')
    async authenticate(@Body() body: { accessCode: string }): Promise<any> {
        if (!body.accessCode) {
            throw new HttpException('cin number is required', HttpStatus.BAD_REQUEST);
        }
        const payload = await this.authService.validateCode(body.accessCode);
        console.log(payload)
        if (!payload) {
            throw new HttpException('Invalid cin number', HttpStatus.UNAUTHORIZED);
        } else {
            const token = await this.authService.generateJwtToken(payload);
            return {
                token
            };
        }
    }

}
