import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject()
  error = new Subject();
  
  // public errorText = new BehaviorSubject<string>(""); 

  constructor() { }
  sendMsg(data:any) {
    return this.subject.next(data) //triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }

  // error message  
  sendErrorMsg(data:any) {
    return this.error.next(data) //triggering an event
  }
  getErrorMsg() {
    return this.error.asObservable()
  }
}
