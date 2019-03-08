import{Component,Input,Output,EventEmitter
} from'@angular/core';


@Component({
    selector:'event-thumbnail',
    template:`<div class=" col-md-6 well">
    <h3>Upcoming data</h3>
    <hr>
    <ul class=" list-data list-item">
    <li>Id:{{event.id}}</li>
    <li>Name:{{event.name}}</li>
    <li>Price:{{event.price}}</li>
    <li>Date:{{event.date}}</li>
    <li class="p-left">Time:{{event.time}}</li>
    </ul>.
    <button class="btn btn-danger" type="button" (click)="dataclickme()">Click!</button>
    </div>`,
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