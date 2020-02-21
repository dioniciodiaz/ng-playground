import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// import { User } from '@models/user';
import { UserService } from '@services/user.service';
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UserService, private userFormBuilder: FormBuilder) { }
  userForm: FormGroup;
  ngOnInit(): void {
    const geolocation = this.userFormBuilder.group({
      lat: [''],
      lng: ['']
    });


    const address = this.userFormBuilder.group({
      street: [''],
      suite: [''],
      city: [''],
      zipcode: ['', Validators.min(1000)],
      geo: geolocation
    });

    const company = this.userFormBuilder.group({
      name: ['', Validators.minLength(3)],
      catchPhrase: ['', Validators.minLength(3)],
      bs: ['', Validators.minLength(3)]
    });

    this.userForm = this.userFormBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      phone: [''],
      website: ['', Validators.pattern('[a-z0-9._%+-]+.[a-z0-9.-]')],
      company,
      address,
    });

    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) {
        this.getUserInfo(userId);
      }
    });

  }

  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get username() {
    return this.userForm.get('username');
  }
  get companyBusiness() {
    return this.userForm.get('company').get('bs');
  }
  get companyName() {
    return this.userForm.get('company').get('name');
  }
  get companyCatchPhrase() {
    return this.userForm.get('company').get('catchPhrase');
  }
  get userZipcode() {
    return this.userForm.get('address').get('zipcode');
  }

  getUserInfo(id: string) {
    this.userService.getById(id).subscribe(response => {
      this.userForm.patchValue(response);
    });
  }

  save() {
    const user = this.userForm.value;

    this.userService.save(user);
  }
}
