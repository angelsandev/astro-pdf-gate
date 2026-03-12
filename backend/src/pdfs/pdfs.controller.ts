import { Controller, Get, Post, Body } from '@nestjs/common';
import { PdfsService } from './pdfs.service';

@Controller('pdfs') // Esto hace que la URL sea /pdfs
export class PdfsController {
  constructor(private readonly pdfsService: PdfsService) {}

  @Get()
  async getAllPdfs() {
    return await this.pdfsService.findAll();
  }

  @Post('download') // Coincide con tu axios.post
  registerDownload(@Body() data: { email: string; pdf_name: string }) {
    console.log(`Email recibido: ${data.email} para el PDF: ${data.pdf_name}`);

    // Aquí en futuro=> guardar en MySQL el email si queremos
    return { message: 'Registro de descarga guardado correctamente' };
  }
}
