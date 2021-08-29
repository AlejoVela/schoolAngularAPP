import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;
  classes: any = [];

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _studentService: StudentService,
    private _classService: ClassService,
  ) {
    this.message = '';
    this.registerData = {};
  }

  ngOnInit(): void {
    this._classService.listClass().subscribe(
      (res) => {
        console.log(res);
        this.classes = res;
      },
      (err) => {
        this._router.navigate(['/createClass']);
        this.message = 'You have to register a class first';
        this.message = err.error
        this.openSnackBarError()
      }
    );
  }

  registerStudent() {
    if (
      !this.registerData.name ||
      !this.registerData.studentId ||
      !this.registerData.className ||
      !this.registerData.birthday
    ) {
      this.message = 'Error: empty fields';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      this._studentService.createStudent(this.registerData).subscribe(
        (res) => {
          console.log(res);
          this.message = 'Student register successfully';
          this.openSnackBarSuccessful();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
          this.registerData = {};
        }
      );
    }
  }

  openSnackBarSuccessful() {
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
    });
  }
}
