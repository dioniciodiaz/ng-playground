import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@models/post';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }
}
