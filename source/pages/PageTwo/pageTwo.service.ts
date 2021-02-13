// import { Injectable } from '@angular/core';

// @Injectable()
export class PageTwoService {
  constructor() {}
  baseUrl = 'https://jsonmock.hackerrank.com/api/movies?Year=';

  async getMovies(input: number) {
    try {
      const response = await fetch(`${this.baseUrl}${input}`);
      const responseData = await response.json();

      return responseData.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  }
}
