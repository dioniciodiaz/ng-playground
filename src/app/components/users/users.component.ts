import { Component, OnInit } from '@angular/core';

import { User } from '@models/user';
import { UserService } from '@services/user.service';

import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  faEdit = faEdit;
  faEye = faEye;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.search().subscribe(response => {
      this.users = response;
    });
  }

}
