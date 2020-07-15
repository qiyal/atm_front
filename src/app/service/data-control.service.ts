import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class DataControlService {
  url = '/api';

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.http.get(this.url  + '/users/rand');
  }

  checkPinCode(pinCode: string, id: number): Observable<any> {
    return this.http.get(this.url + `/users?pinCode=${pinCode}&userId=` + id);
  }

  getUserBalance(id: string): Observable<any> {
    return this.http.get(this.url + '/users/' + id + '/balance');
  }

  withdrawUserBalance(id: string, value: number): Observable<any> {
    return this.http.put(this.url  + `/users/${id}/balance/withdraw`, value);
  }

  addSumInUserBalance(id: string, value: number): Observable<any> {
    return this.http.put(this.url  + `/users/${id}/balance/add`, value);
  }

  checkCard(card: any): Observable<any>{
    return this.http.get(this.url + `/users/check?cardNumber=${card.numberCard}&pinCode=${card.pinCode}`);
  }
}
