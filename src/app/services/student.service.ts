import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  env: string;
  constructor(
    private _http: HttpClient
  ) { 
    this.env = environment.APP_URL;
  }

  createStudent(student: any){
    return this._http.post<any>(this.env + "student/createStudent", student);;
  };
}
