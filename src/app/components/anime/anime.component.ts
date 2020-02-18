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

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.search('naruto&limit=16').subscribe(({ results }: AnimeRequest) => {
      this.animes = results;
    });
  }

}
