import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { IUser } from '../../Interfaces/i-user';
import { UserService } from '../../services/user/user.service';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: IUser[];
  displayedColumns: string[] = ['name', 'address', 'email', 'age', 'gender', 'isGraduate', 'controls',];
  
  constructor(
    public dialog: MatDialog, 
    public snackBar: MatSnackBar, 
    public userService: UserService,
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  getGraduateOnly() {
    return this.users.filter(u => u.isGraduate);
  }

  getGraduateCount(): number {
    return this.users.filter(u => u.isGraduate).length;
  }

  openEditDialog(data: any, index: number): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { ...data, 'index': index },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        const { index, ...restData } = result;
        this.users = this.userService.updateUser(restData, index);
      }
    });
  }

  openDeleteDialog(index: number): void {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { 'index': index },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        const { index } = result;
        this.users = this.userService.deleteUser(index);
      }
    });
  }
}

