import { Routes } from '@angular/router';

import { MovieListComponent } from './components/MovieList/movie-list.component';
import { PageTwoComponent } from './pages/PageTwo/pageTwo.component';

export const routes: Routes = [
  { component: MovieListComponent, path: '' },
  { component: PageTwoComponent, path: 'pageTwo' },
];

export const pageDeclarations = routes.map((route) => route.component);
