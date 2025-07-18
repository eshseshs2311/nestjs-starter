import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appName = process.env.APP_NAME + 'API Documentation';

  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(`${appName}`)
    .setVersion('1.0')
    .addTag('users')
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
