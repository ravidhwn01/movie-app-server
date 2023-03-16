import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieSchema } from 'src/schemas/movie.schema';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      password: 'postgres',
      username: 'postgres',
      port: 5001,
      models: [MovieSchema],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
