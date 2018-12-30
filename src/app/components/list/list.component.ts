import { Component, OnInit } from '@angular/core';
import { IUser } from './i-user';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: IUser[];
  displayedColumns: string[] = ['name', 'address', 'email', 'age', 'gender', 'isGraduate', 'star'];
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {

    
    this.users = [
      {
        name: 'Ajay Kumar',
        address: 'Pune',
        email: 'ajay.kumar@gmail.com',
        age: 15,
        gender: 'Male',
        isGraduate: false
      },
      {
        name: 'Prachi Shukla',
        address: 'Mumbai',
        email: 'prachi.shukla@gmail.com',
        age: 23,
        gender: 'Female',
        isGraduate: true
      },
      {
        name: 'Sunil Verma',
        address: 'Mumbai',
        email: 'sunil.verma@gmail.com',
        age: 30,
        gender: 'Male',
        isGraduate: true
      },
      {
        name: 'Minal Kambale',
        address: 'Pune',
        email: 'minal.kambale@gmail.com',
        age: 19,
        gender: 'Female',
        isGraduate: false
      },
      {
        name: 'Vijay Raj',
        address: 'Delhi',
        email: 'vijay.raj@gmail.com',
        age: 20,
        gender: 'Male',
        isGraduate: true
      }
    ]
  }

  getGraduateOnly() {
    return this.users.filter(u => u.isGraduate);
  }

  getGraduateCount(): number {
    return this.users.filter(u => u.isGraduate).length;
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }
}

