import { Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  movies() {
    return this.movieService.getMovieData();
  }
}
