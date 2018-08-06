import { environment } from '../environments/environment'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${environment.gartnerToken}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get(environment.gartnerUrl+'/Categories', httpOptions);
  }
}
