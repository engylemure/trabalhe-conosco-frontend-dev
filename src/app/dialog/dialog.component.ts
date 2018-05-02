import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { UserModel } from '../user/user';
import { fetchPayment } from '../lib/api/fetchPayment';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async payUser() {
    const { user } = this.data
    console.log('Usuario ' + user.name + 'Foi pago');
    const payData = await fetchPayment(user.id, 1)
    console.log(payData)
  }
}
