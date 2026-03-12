import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Configurar la carpeta estática
  app.useStaticAssets(join(__dirname, '..', 'public'));

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
