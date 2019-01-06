import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: IUser[] = [
    {
      name: 'Ajay Kumar',
      address: 'Pune',
      email: 'ajay.kumar@gmail.com',
      age: 15,
      gender: 'Male',
      isGraduate: false,
      
    },
    {
      name: 'Prachi Shukla',
      address: 'Mumbai',
      email: 'prachi.shukla@gmail.com',
      age: 23,
      gender: 'Female',
      isGraduate: true,
      
    },
    {
      name: 'Sunil Verma',
      address: 'Mumbai',
      email: 'sunil.verma@gmail.com',
      age: 30,
      gender: 'Male',
      isGraduate: true,
      
    },
    {
      name: 'Minal Kambale',
      address: 'Pune',
      email: 'minal.kambale@gmail.com',
      age: 19,
      gender: 'Female',
      isGraduate: false,
      
    },
    {
      name: 'Vijay Raj',
      address: 'Delhi',
      email: 'vijay.raj@gmail.com',
      age: 20,
      gender: 'Male',
      isGraduate: true,
    }
  ];

  getUsers():IUser[] {
    return this.users;
  }

  addUser(newUser:IUser): IUser[] {
    this.users.push(newUser);
    return this.users;
  }

  deleteUser(index):IUser[] {
    this.users.splice(index, 1);
    return this.users;
  }

  updateUser(user:IUser, index):IUser[] {
    this.users[index] = user;
    return this.users;
  }
}
