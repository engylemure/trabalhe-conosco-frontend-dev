import { Component, OnInit , Inject} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { UserModel } from '../user/user';
import { fetchUsers } from '../lib/api/fetchUsers';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  userData = [];

  selectedUser: UserModel;

  constructor(public dialog: MatDialog) {}

  async ngOnInit() {
    this.userData = await fetchUsers();
  }

  openDialog(user: UserModel): void {
    this.selectedUser = user;
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.selectedUser.name, user: this.selectedUser }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedUser = result;
    });
  }
}
