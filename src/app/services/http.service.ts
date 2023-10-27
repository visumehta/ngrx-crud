import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { USER } from '../interfaces/USER';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:3000/usersData/';
  constructor(private http: HttpClient) { 
    
  }

  postUserForm(userData: USER) {
    console.log(userData);
    // return of('test');
    return this.http.post(this.url, userData).pipe(map((res: any) => {
      return res;
    }));
  }
}
