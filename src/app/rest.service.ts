import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {   }

  url : string = "http://localhost:3000/db/";

  url1: string = "http://localhost:3000/db1/";

  url2: string = "http://localhost:3000/db2/";

  url3: string = "http://localhost:3000/";

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }

  getAllCountriesData()
  {
    return this.http.get<any[]>(this.url1);
  }

  getAllContinentsData()
  {
    return this.http.get<any[]>(this.url2);
  }

  getDefault()
  {
    return this.http.get<Users[]>(this.url3);
  }
}
