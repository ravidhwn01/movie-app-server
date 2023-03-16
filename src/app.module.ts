import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieService } from './movie/movie.service';
import { MovieModule } from './movie/movie.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [MovieModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, MovieService],
})
export class AppModule {}
