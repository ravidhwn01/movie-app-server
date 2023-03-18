import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MovieSchema } from 'src/schemas/movie.schema';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  movies() {
    return this.movieService.getMovieData();
  }

  @Post('addwatchlist')
  postMovie(@Body() movie: MovieSchema) {
    return this.movieService.getWatchListData(movie);
  }
  @Get('watchlist')
  getWatchListMovies() {
    return this.movieService.getWatchListMovie();
  }
  @Patch('markwatched/:id')
  markWatched(@Param('id') id: number) {
    return this.movieService.markWatched(id);
  }
}
