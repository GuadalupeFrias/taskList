import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/service/ui.service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'My Task List';
  showAddTask :boolean =true;
  subscription?: Subscription;

  constructor( 
    private uiServiceService:UiServiceService,
    private router:Router
    )  {
   this.subscription = this.uiServiceService.onToggle()
                        .subscribe(value => this.showAddTask=value)
   }

  ngOnInit(): void {
  }
  toggleAddTask(){
  this.uiServiceService.toogleaAddTask();
  }
  hasRoute(route:string){
    return this.router.url ===route
  }
}
