import { Component, OnInit } from '@angular/core';

import { AnimeService } from '@services/anime.service';
import { Anime, AnimeRequest } from '@models/anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animes: Anime[] = [];

  constructor(
    private animeService: AnimeService,
  ) { }

  ngOnInit(): void {
    this.searchAnime('naruto');
  }

  searchAnimeByTerms(terms: string) {
    this.searchAnime(terms);
  }
  searchAnime(terms: string, params: string = '&limit=15') {
    this.animeService.search(`${terms}${params}`).subscribe(({ results }: AnimeRequest) => {
      this.animes = results;
    });
  }
}
