import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private showAddTask:boolean = false;
  private subjet =new Subject<any>();

  constructor() { }
  toogleaAddTask():void{
   
    this.showAddTask =!this.showAddTask;
    this.subjet.next(this.showAddTask);
  }
  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}
