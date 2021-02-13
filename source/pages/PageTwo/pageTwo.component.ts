import { Component, forwardRef, Inject, Input, OnInit } from '@angular/core';

import { PageTwoService } from './pageTwo.service';

@Component({
  providers: [PageTwoService],
  selector: 'app-page-two',
  styleUrls: ['./pageTwo.component.scss'],
  templateUrl: './pageTwo.component.html',
})
export class PageTwoComponent implements OnInit {
  @Input() movieYear: number;
  movies: Movie[];

  constructor(
    @Inject(forwardRef(() => PageTwoService))
    private pagetwoListService: PageTwoService
  ) {}

  async populateMovieList(): Promise<void> {
    this.movies = await this.pagetwoListService.getMovies(this.movieYear);
  }

  ngOnInit() {}
}

export interface Movie {
  Title: string;
  Year: number;
  imdbID: number;
}
