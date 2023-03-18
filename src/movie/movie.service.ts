import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Repository, Sequelize } from 'sequelize-typescript';
import { MovieSchema } from 'src/schemas/movie.schema';
import { CreateMovieDto } from 'src/types/movie.types';

@Injectable()
export class MovieService {
  private repository: Repository<MovieSchema>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(MovieSchema);
  }
  async getMovieData() {
    const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=f7105a03bb0a59160d88c3d60fbc2ff1&page=1`;

    const response = await axios.get(apiUrl);
    // console.log(response.data);
    // return this.repository.create(response.data);
    return response.data;
  }

  getWatchListData(createMovieDto: CreateMovieDto) {
    console.log(createMovieDto);
    return this.repository.create({
      title: createMovieDto.title,
      overview: createMovieDto.overview,
      imgUrl: createMovieDto.imgUrl,
    });
  }
  getWatchListMovie() {
    return this.repository.findAll();
  }

  markWatched(id: number) {
    return this.repository.update({ isWatched: true }, { where: { id: id } });
  }
}
