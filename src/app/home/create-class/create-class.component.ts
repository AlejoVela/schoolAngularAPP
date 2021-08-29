import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { CourseService } from 'src/app/services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css'],
})
export class CreateClassComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;
  teachers: any = [];
  courses: any = [];

  constructor(
    private _classService: ClassService,
    private _teacherService: TeacherService,
    private _courseService: CourseService,
    private _snackBar: MatSnackBar,
    private _router: Router,
  ) {
    this.message = '';
    this.registerData = {};
  }

  ngOnInit(): void {
    this._teacherService.listTeacher().subscribe(
      (res) =>{
        this.teachers = res;
        console.log(res);
      },
      (error) => {
        this._router.navigate(['/createTeacher']);
        this.message = "You have to register a teacher first";
        this.openSnackBarError();
      }
    );
    this._courseService.listCourse().subscribe(
      (res) =>{
        this.courses = res;
        console.log(res);
      },
      (error) => {
        this._router.navigate(['/createCourse']);
        this.message = "You have to register a course first";
        this.openSnackBarError();
      }
    );
  }

  registerClass() {
    if (
      !this.registerData.className ||
      !this.registerData.classTeacher ||
      !this.registerData.quota ||
      !this.registerData.career ||
      !this.registerData.startClass ||
      !this.registerData.endClass
    ) {
      this.message = 'Error: empty fields';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      this._classService.registerClass(this.registerData).subscribe(
        (res) => {
          this.message = 'Class register succesfull';
          this.openSnackBarSuccessful();
          this.registerData = {};
        },
        (err) => {
          this.message = err.error;
          console.log(err);
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
