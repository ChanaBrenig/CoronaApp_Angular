import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  styleUrls: ['report.component.css'],
  templateUrl: './report.component.html',

})
export class ReportComponent {

  constructor(private _reportService: ReportService) {

  }

  title: string = 'Report Your Path';
  displayedColumns: string[] = ['StartDate', 'EndDate', 'City', 'Address', 'Delete'];
  reportList: any[] = [];

  newLocation: FormGroup = new FormGroup({
    "startDate": new FormControl('', [Validators.required]),
    "endDate": new FormControl('', [Validators.required]),
    "city": new FormControl('', [Validators.required, Validators.maxLength(50)]),
    "address": new FormControl('', [Validators.required, Validators.maxLength(50)]),
    "patientId": new FormControl('', [Validators.required, Validators.maxLength(9)])
  });

  filterByPatientId() {
    let ID = this.newLocation.controls['patientId'].value;
    this._reportService.getByPatientId(ID).subscribe((data) => {
      this.reportList = data;
      // if (this.reportList.length == 0) {
      //   alert('Would you like to add a new patient?');

      // }
  }
      , err => { console.log("no such patientId") });
  }

  deleteLocation(locationID: number) {
    this._reportService.deleteLocation(locationID)
      .subscribe(() => {
        this.filterByPatientId();
        console.log("location deleted successfully")
      },
        err => { console.log("deleting location failed") });
  }

  onFormSubmit(): void {
    if (this.newLocation.valid) {
      let locationToSave = this.newLocation.value;
      this._reportService.addLocation(locationToSave)
        .subscribe(() => {
          this.filterByPatientId();
          console.log("location added successfully")
        },
          err => { console.log("failed to add location") });
    }
  }
  // nextPage(): void {
  //   window.location.href = "./view.component.html";
  // }
 
}
