import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ConnectableObservable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
 @Input() task: Task = TASKS[0]
 @Output() onDeleteTask: EventEmitter<Task> =new EventEmitter()
 @Output() onToggleReminder: EventEmitter<Task> =new EventEmitter()

 faTimes = faTimes;
 
  now = new Date()
  validez :string=""
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: Task){
   this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
   }
   taskExpired(task: Task, now: Date){
  
   const day = new Date(task.day)
  
   const  tiempo = now.getTime() - day.getTime()
   console.log(tiempo)
   if (tiempo <= 0)
   
   return true;
   else
   return false;
   }
   taskProxExpired(task: Task, now: Date){
  
    const day = new Date(task.day)
   
    const  tiempo = now.getTime() - day.getTime()
 
    if (tiempo <= 172800000 && tiempo >= -172800000 )
    return true;
  else
    return false;
    }
}
