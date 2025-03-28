import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
