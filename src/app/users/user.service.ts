import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl= "http://localhost:9000/"
  constructor(private http:HttpClient) {}
    getuser(email:string):Observable<User>{
       return this.http.get<User>(this.baseUrl+'users'+'/'+email);
    }
    addUser(data:any):Observable<User>{
      return this.http.post<User>(this.baseUrl+'users',data);
    }
    private eventSubject = new Subject<void>();

  sendEvent() {
    this.eventSubject.next();
  }

  getEvent() {
    return this.eventSubject.asObservable();
  }
}
