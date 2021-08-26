import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  registerData: any;
  constructor() { }

  ngOnInit(): void {
    this.registerData = {};
  }

}
