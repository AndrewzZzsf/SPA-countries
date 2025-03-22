import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

//ng g m shared --> crear modulo
