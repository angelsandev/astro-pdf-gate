import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfsModule } from './pdfs/pdfs.module';
import { Pdf } from './pdfs/entities/pdf.entity'; // Importamos la entidad

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Cargar las variables de entorno

    // Configurar la conexión a MySQL
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Pdf], // Aquí registramos nuestra tabla de PDFs
        synchronize: true, // ¡OJO! En desarrollo crea las tablas automáticamente
      }),
    }),

    PdfsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
