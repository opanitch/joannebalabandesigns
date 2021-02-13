import { Injectable } from '@angular/core';

@Injectable()
export class MovieListService {
  constructor() {}

  async getMovies(input: number) {
    try {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/movies?Year=${input}`
      );
      const responseData = await response.json();

      return responseData.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  }
}
