import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  registerData: any;
  constructor() { }

  ngOnInit(): void {
    this.registerData = {};
  }

}
