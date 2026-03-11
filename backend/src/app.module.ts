import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })], // Para usar los .env en todos los sitios(global)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
