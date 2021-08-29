import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private env: string;

  constructor(
    private _http: HttpClient
  ) {
    this.env = environment.APP_URL;
  }

  registerUser (course: any) {
    return this._http.post<any>(this.env + 'course/createCourse', course);
  }
  listCourse(course?: any){
    return this._http.get<any>(this.env + "course/listCourse", course);
  };
}
