import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Configurar la carpeta estática
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    setHeaders: (res: Response) => {
      res.set('Content-Disposition', 'attachment'); // Obliga a Descargar en lugar de Previsualizar el PDF
    },
  });

  // ACTIVAR CORS: Esto permite que Astro le hable a Nest
  app.enableCors({
    origin: 'http://localhost:4321', // La URL del frontend
    methods: 'GET,POST',
    credentials: true,
  });

  const port = process.env.PORT || 3000; // Leer el puerto desde el .env (o 3000)
  await app.listen(port);
}
bootstrap();
