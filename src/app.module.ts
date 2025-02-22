import { Module } from '@nestjs/common';
import { AppController, CatsController } from './app.controller';
import { AppService, CatService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
