import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  registerData: any;
  constructor() { }

  ngOnInit(): void {
    this.registerData = {};
  }

}
