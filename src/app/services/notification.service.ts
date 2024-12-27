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
export class NotificationService {

  constructor(
    private http: HttpClient,
  ) { }

  getNotificationsUser(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/get/notifications/user`, {headers: requestOptions})
  }

  getCountUnreadNotificationsUser(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/notification/get/count/unread/notifications/user`, {headers: requestOptions})
  }

  setUnreadNotificationsUser(): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/notification/set/unread/notifications/user`, {headers: requestOptions})
  }

  removeNotification(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/notification/remove/notification/${id}`, {headers: requestOptions})
  }
}
