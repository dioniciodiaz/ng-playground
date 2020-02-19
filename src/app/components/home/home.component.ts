import { Component, OnInit } from '@angular/core';
import { PostService } from '@services/post.service';
import { Post } from '@models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.search('?_expand=user&_page=1&_limit=18').subscribe(response => {
      this.posts = response;
    });
  }

}
