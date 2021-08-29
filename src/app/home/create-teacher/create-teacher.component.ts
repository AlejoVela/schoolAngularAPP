import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css'],
})
export class CreateTeacherComponent implements OnInit {
  message: string;
  registerData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _teacherService: TeacherService
  ) {
    this.message = '';
    this.registerData = {};
  }

  ngOnInit(): void {
  }

  registerTeacher() {
    if (
      !this.registerData.name ||
      !this.registerData.teacherId ||
      !this.registerData.birthday ||
      !this.registerData.direction
    ) {
      this.message = "Error: There'r empty fields";
      this.openSnackBarError();
      this.registerData = {}
    } else {
      this._teacherService.registerTeacher(this.registerData).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/createClass']);
          this.message = 'User register succesfully';
          this.openSnackBarSuccessfully();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError()
        }
      );
    }
  }

  openSnackBarSuccessfully() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    })
  }
}
