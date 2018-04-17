import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ListService } from './services/list.service';
import {StatsServiceService} from './services/stats-service.service'

import { ViewStatsComponent } from './view-stats/view-stats.component' 

import { ChartsModule } from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    ViewStatsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule
  ],
  providers: [ListService, StatsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
