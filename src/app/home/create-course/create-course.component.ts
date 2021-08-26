import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  registerData: any;
  constructor() { }

  ngOnInit(): void {
    this.registerData = {};
  }
}
