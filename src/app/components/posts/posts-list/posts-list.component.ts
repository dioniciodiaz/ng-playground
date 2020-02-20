import { Component, OnInit, Input } from '@angular/core';

import { Post } from '@models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
