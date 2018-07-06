import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';
import { QueryComponent } from './query/query.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listdata', component: ListDataComponent },
  { path: 'query/:requieredData', component: QueryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
