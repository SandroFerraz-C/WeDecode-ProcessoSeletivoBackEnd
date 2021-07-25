import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmeModule } from './filme/filme.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [FilmeModule],
})
export class AppModule {}
