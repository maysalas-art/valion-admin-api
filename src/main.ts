import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración de CORS.
  app.enableCors({
    origin: process.env.FRONTEND_URL, 
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS', // Incluye OPTIONS
    credentials: true, // Permite el envío de cookies o credenciales
  });

  // Middleware para manejar solicitudes preflight (OPTIONS)
  app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
      res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
      res.header('Access-Control-Allow-Credentials', 'true');
      return res.sendStatus(200); // Responde con 200 OK
    }
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
  
}
bootstrap();