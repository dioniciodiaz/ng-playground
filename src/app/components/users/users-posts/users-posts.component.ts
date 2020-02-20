import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User } from '@models/user';
import { UserService } from '@services/user.service';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss']
})
export class UsersPostsComponent implements OnInit {
  user: User;
  // private userId = new Subject<string>();
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) {
        this.searchUser(userId);
      }
    });
  }

  searchUser(id: string) {
    this.userService.getById(id, '?_embed=posts').subscribe(response => {
      this.user = response;
    });
  }
}
