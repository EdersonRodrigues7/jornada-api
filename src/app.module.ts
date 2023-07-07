import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepositionsModule } from './depositions/depositions.module';

@Module({
  imports: [DepositionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
