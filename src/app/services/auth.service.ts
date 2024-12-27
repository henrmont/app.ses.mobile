import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const requestOptions = {
  'Authorization': `Bearer ${window.localStorage.getItem('token')}`
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, data)
  }

  recover(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/recover`, data)
  }

  reset(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/reset`, data)
  }

  resend(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/resend`, data, {headers: requestOptions})
  }

  verification(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/verification`, data, {headers: requestOptions})
  }

  me(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/auth/me`, {headers: requestOptions})
  }

  refresh(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/auth/refresh`, {headers: requestOptions})
  }

  permission(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/auth/permission`, {headers: requestOptions})
  }

  logout() {
    return this.http.get<any>(`${environment.apiUrl}/auth/logout`, {headers: requestOptions})
  }
}
