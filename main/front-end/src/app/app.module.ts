import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListDataComponent } from './list-data/list-data.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';    // add this
import { UserService } from './user.service';
import { QueryComponent } from './query/query.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    ListDataComponent,
    QueryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
