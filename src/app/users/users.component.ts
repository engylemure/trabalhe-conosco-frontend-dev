import { Component, OnInit } from '@angular/core';

import {UserModel} from "../user/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  userData = [];
  
  selectedUser;

  constructor() { }

  async ngOnInit() {
    const picPayUsersUrl = 'http://careers.picpay.com/tests/mobdev/users';
    const response = await fetch(picPayUsersUrl);
    this.userData = await response.json();
  }

}
