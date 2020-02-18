import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { AnimeComponent } from './components/anime/anime.component';
import { AnimeItemComponent } from './components/anime/anime-item/anime-item.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { AnimeSearchTabComponent } from './components/anime/anime-search-tab/anime-search-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnimeComponent,
    AnimeItemComponent,
    TruncateTextPipe,
    UsersComponent,
    PostsComponent,
    AnimeSearchTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
