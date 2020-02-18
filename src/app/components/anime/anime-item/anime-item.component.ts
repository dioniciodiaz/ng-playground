import { Component, OnInit, Input } from '@angular/core';

import { Anime } from '@models/anime';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {

  @Input() anime: Anime;

  constructor() { }

  ngOnInit(): void {
  }

}
