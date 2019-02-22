import { Component, OnInit } from '@angular/core';
import { UserModel } from './../lib/models';
import { MatDialog } from '@angular/material';
import { CareersPicPayAPI} from '../lib/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  userData = [];

  selectedUser: UserModel;

  // constructor(public dialog: MatDialog) {}

  async ngOnInit() {
    this.userData = await CareersPicPayAPI.fetchUsers();
  }

  openDialog(user: UserModel): void {
    this.selectedUser = user;
    // const dialogRef = this.dialog.open(DialogComponent, {
    //   data: { name: this.selectedUser.name, user: this.selectedUser }
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.selectedUser = result;
    // });
  }
}
