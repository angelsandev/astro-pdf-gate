import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfsService } from './pdfs.service';
import { PdfsController } from './pdfs.controller';
import { Pdf } from './entities/pdf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pdf])], // Registrar la entidad (Pdf) para este módulo
  providers: [PdfsService],
  controllers: [PdfsController],
})
export class PdfsModule {}
