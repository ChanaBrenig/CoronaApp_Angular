import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { MatTableModule } from '@angular/material/table'  
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from './report.service';
import { ViewService } from './view.service';
import { ViewComponent } from './view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewPatient } from './newPatient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';






@NgModule({
  declarations: [
    ReportComponent, ViewComponent, NewPatient
  ],
  imports: [
    ReactiveFormsModule, 
    HttpClientModule, 
    CommonModule, 
    MatTableModule, 
    MatFormFieldModule, 
    FormsModule, 
    MatIconModule, 
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [ ReportComponent, ViewComponent ],
  providers: [ReportService,
              ViewService]
})
export class Covid19Module { }
