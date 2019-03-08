import{Component,Input,Output,EventEmitter
} from'@angular/core';


@Component({
    selector:'event-thumbnail',
    template:`
    <div class="">
    <div class=" col-md-6 well">
    <h3>Upcoming data</h3>
    <hr>
    <div class=" list-data list-item">
    <div>Id:{{event.id}}</div>
    <div>Name:{{event.name}}</div>
    <div>Price:{{event.price}}</div>
    <div *ngIf="event?.date">Date:{{event.date}}</div>
    <div class="p-left">Time:{{event.time}}</div>

    
    </div>

    
    <button class="btn btn-danger" type="button" (click)="dataclickme()">Click!</button>
    </div>
    </div>
    `,
    styles:[`
    .p-left{
        margin-left:10px;
    }
    
    `

    ]

   
})

export class EventsThumbnailComponent{
@Input() event :any;
@Output() eventClick = new EventEmitter()

dataclickme(){
    this.eventClick.emit(this.event.name)
}
}