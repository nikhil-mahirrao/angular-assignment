import { Component, OnInit } from '@angular/core';
import { IUser } from './i-user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: IUser[];

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        name: 'Ajay Kumar',
        address: 'Pune',
        email: 'ajay.kumar@gmail.com',
        age: 25,
        gender: 'male',
        isGraduate: true
      },
      {
        name: 'Prachi Shukla',
        address: 'Mumbai',
        email: 'prachi.shukla@gmail.com',
        age: 23,
        gender: 'female',
        isGraduate: true
      },
      {
        name: 'Sunil Verma',
        address: 'Mumbai',
        email: 'sunil.verma@gmail.com',
        age: 30,
        gender: 'male',
        isGraduate: true
      },
      {
        name: 'Minal Kambale',
        address: 'Pune',
        email: 'minal.kambale@gmail.com',
        age: 19,
        gender: 'female',
        isGraduate: false
      },
      {
        name: 'Vijay Raj',
        address: 'Delhi',
        email: 'vijay.raj@gmail.com',
        age: 20,
        gender: 'male',
        isGraduate: false
      }
    ]
  }

  getGraduateOnly() {
    return this.users.filter(u => u.isGraduate);
  }

  getGraduateCount(): number {
    return this.users.filter(u => u.isGraduate).length;
  }

}

