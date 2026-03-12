import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pdf } from './entities/pdf.entity';

@Injectable()
export class PdfsService {
  constructor(
    @InjectRepository(Pdf)
    private pdfRepository: Repository<Pdf>,
  ) {}

  // Función para obtener todos los PDFs activos
  findAll(): Promise<Pdf[]> {
    return this.pdfRepository.find({
      where: { isActive: true },
    });
  }
}
