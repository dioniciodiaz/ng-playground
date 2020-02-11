import { Component, OnInit } from '@angular/core';

import { AnimeService } from '@services/anime.service';
import { Anime } from '@models/anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.search('naruto&limit=16').subscribe((data) => {
      this.animes = data;
      console.log('data', data);
    });
  }

}
