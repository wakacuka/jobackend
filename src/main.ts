import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { SERVER_PORT } from './common/common.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT);
  console.log(`server up at ${SERVER_PORT}`);
}
bootstrap();
