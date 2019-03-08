import{Component} from'@angular/core';
import{EventService} from './event.service';


@Component({
    selector:'event-list',
    template:
    `<div>
    <h1>Upcoming Event </h1>
    <hr>
    <div class="col-md-12  well">
    <event-thumbnail *ngFor="let event of events" [event]="event"></event-thumbnail>
    </div>
    </div>
    `
   
})

export class EventListComponent{
  events:any[]
  constructor(private eventservice : EventService){
  }
  ngOnInit(){
    this.events = this.eventservice.getEvents()
    

  }
handledataclickme(data){
    console.log('recived:',data);

}
}