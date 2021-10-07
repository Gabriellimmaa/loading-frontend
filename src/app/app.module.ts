import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { Loading01Component } from './pages/loading01/loading01.component';
import { Loading02Component } from './pages/loading02/loading02.component';
import { Loading03Component } from './pages/loading03/loading03.component';
import { Loading04Component } from './pages/loading04/loading04.component';
import { Loading05Component } from './pages/loading05/loading05.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Loading01Component,
    Loading02Component,
    Loading03Component,
    Loading04Component,
    Loading05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
