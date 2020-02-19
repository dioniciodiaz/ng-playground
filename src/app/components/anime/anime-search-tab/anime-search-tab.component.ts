import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-anime-search-tab',
  templateUrl: './anime-search-tab.component.html',
  styleUrls: ['./anime-search-tab.component.scss']
})
export class AnimeSearchTabComponent implements OnInit {
  faSearch = faSearch;
  searchParams = new FormControl('', Validators.minLength(3));

  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchAnime() {
    if (this.searchParams.valid) {
      this.search.emit(this.searchParams.value);
    }
  }

}
