import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component'
import { Loading01Component } from './pages/loading01/loading01.component'
import { Loading02Component } from './pages/loading02/loading02.component'
import { Loading03Component } from './pages/loading03/loading03.component'
import { Loading04Component } from './pages/loading04/loading04.component'
import { Loading05Component } from './pages/loading05/loading05.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'loading01', component: Loading01Component },
  { path: 'loading02', component: Loading02Component },
  { path: 'loading03', component: Loading03Component },
  { path: 'loading04', component: Loading04Component },
  { path: 'loading05', component: Loading05Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
