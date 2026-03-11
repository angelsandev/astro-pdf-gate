import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('download') // Esta será la ruta: http://localhost:3000/download
  handleDownload(@Body() data: { email: string; pdf_name: string }) {
    console.log('--- NUEVA DESCARGA DETECTADA ---');
    console.log(`Email: ${data.email}`);
    console.log(`Archivo: ${data.pdf_name}`);

    // Devolvemos una respuesta al Frontend
    return {
      status: 'success',
      message: 'Email registrado correctamente en el servidor',
      received: data,
    };
  }
}
