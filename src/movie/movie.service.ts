import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MovieService {
  async getMovieData() {
    const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=f7105a03bb0a59160d88c3d60fbc2ff1&page=2`;

    const response = await axios.get(apiUrl);
    // console.log(response.data);
    return response.data;
  }
}
