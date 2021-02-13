import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { pageDeclarations, routes } from './router.config';

const moduleDeclarations: any[] = new Array(AppComponent).concat(
  pageDeclarations
);

console.log('APP MODULE');
console.log(routes);

@NgModule({
  declarations: moduleDeclarations,
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
