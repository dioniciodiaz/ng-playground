import { Component, OnInit, Input } from '@angular/core';

import { Anime } from '@models/anime';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {

  @Input() anime: Anime;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  goToAnime(url: string) {
    window.open(url, '_blank');
  }
}
