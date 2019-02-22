import { Component, OnInit, Input } from '@angular/core';
import { UserModel }  from './user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input() user : UserModel;

  constructor() { }

  ngOnInit() {
  }

}
