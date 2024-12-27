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
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/profile/get/profile`, {headers: requestOptions})
  }

  setProfileInfo(data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/profile/set/profile/info`, data, {headers: requestOptions})
  }

  setProfilePicture(data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/profile/set/profile/picture`, data, {headers: requestOptions})
  }

}
