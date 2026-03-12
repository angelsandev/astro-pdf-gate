import { Controller, Get } from '@nestjs/common';
import { PdfsService } from './pdfs.service';

@Controller('pdfs') // Esto hace que la URL sea /pdfs
export class PdfsController {
  constructor(private readonly pdfsService: PdfsService) {}

  @Get()
  async getAllPdfs() {
    return await this.pdfsService.findAll();
  }
}
