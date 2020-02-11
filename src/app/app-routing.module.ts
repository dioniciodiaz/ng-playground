import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '@components/home/home.component';
import { AnimeListComponent } from '@components/anime-list/anime-list.component';
import { CommentsListComponent } from '@components/comments-list/comments-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anime', component: AnimeListComponent },
  { path: 'comments', component: CommentsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
