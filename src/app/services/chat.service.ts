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
export class ChatService {

  constructor(
    private http: HttpClient,
  ) { }

  getChats(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/chats`, {headers: requestOptions})
  }

  getChat(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/chat/${id}`, {headers: requestOptions})
  }

  getPendingChats(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/chat/get/pending/chats`, {headers: requestOptions})
  }

  registerMessage(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/chat/register/message`, data, {headers: requestOptions})
  }
}
