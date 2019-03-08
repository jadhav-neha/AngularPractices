import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { Eventscomponentapp } from './eventsapp.component';
import {EventListComponent} from './eventlist.component'
import {EventsThumbnailComponent} from './eventsthumbnail.component'
import{ NavbarComponentapp} from './nav/navbar.component'


@NgModule({
  declarations: [
    Eventscomponentapp,
    EventListComponent,
    EventsThumbnailComponent,
    NavbarComponentapp
  ],
  imports: [
    BrowserModule
  ],
  // providers: [],
  bootstrap: [Eventscomponentapp]
})
export class AppModule { }
