import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Covid19Module } from '../covid19/covid19.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSort } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { ReportComponent } from 'src/covid19/report.component';
import { ViewComponent } from 'src/covid19/view.component';
import { MatMenuModule} from '@angular/material/menu';


const ROUTERS: Routes =[
  {path: 'report', component: ReportComponent},
  {path: 'view', component: ViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Covid19Module,
    BrowserAnimationsModule,
    MatMenuModule,
    RouterModule.forRoot(ROUTERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

