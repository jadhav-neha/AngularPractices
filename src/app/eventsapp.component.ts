import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <event-list></event-list>`
  
  
})
export class Eventscomponentapp {
  // title = 'app';
  event ={
    id:'1',
    name:'Neha',
    contact:'8522212'
  }
}
