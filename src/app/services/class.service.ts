import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  env: string;
  constructor(private _http: HttpClient) { 
    this.env = environment.APP_URL;
  }

  registerClass (classInstitute: any) {
    return this._http.post<any>(this.env + 'class/createClass', classInstitute);
  }
  listClass (classInstitute?: any) {
    return this._http.get<any>(this.env + 'class/listClass', classInstitute);
  }
}
