import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { MatTableModule } from '@angular/material/table'  
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from './report/report.service';
import { ViewService } from './view/view.service';
import { ViewComponent } from './view/view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [
    ReportComponent, ViewComponent
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
