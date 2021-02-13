import { Component, forwardRef, Inject, Input, OnInit } from '@angular/core';

import { MovieListService } from './movie-list.service';

@Component({
  providers: [MovieListService],
  selector: 'app-movie-list',
  styleUrls: ['./movie-list.component.scss'],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  @Input() movieYear: number;
  movies: Movie[];

  constructor(
    @Inject(forwardRef(() => MovieListService))
    private movieListService: MovieListService
  ) {
    console.log('** BUILDING MovieListComponent **');
  }

  async populateMovieList(): Promise<void> {
    this.movies = await this.movieListService.getMovies(this.movieYear);
  }

  ngOnInit() {}
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
