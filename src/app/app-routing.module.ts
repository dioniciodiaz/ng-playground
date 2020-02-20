import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '@components/home/home.component';
import { AnimeComponent } from '@components/anime/anime.component';
import { UsersComponent } from '@components/users/users.component';
import { UsersPostsComponent } from '@components/users/users-posts/users-posts.component';
import { UsersFormComponent } from '@components/users/users-form/users-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:userId/posts', component: UsersPostsComponent },
  { path: 'users/:userId', component: UsersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
