import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ViewService } from "./view.service";

@Component({
  selector: 'app-view',
  styleUrls: ['view.component.css'],
  templateUrl: './view.component.html',

})
export class ViewComponent implements OnInit, AfterViewInit {



  title: string = 'Epidemiology Report';

  city: string = '';
  displayedColumns: string[] = ['StartDate', 'EndDate', 'City', 'Address'];
  reportList: any[] = [];
  dataSource!: MatTableDataSource<Location>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _viewService: ViewService, private _liveAnnouncer: LiveAnnouncer) {
  }


  filterByCity() {
    this._viewService.getLocationsByCity(this.city)
      .subscribe((data) => {
        this.reportList = data;
        console.log("filter successfully by city");
        this.dataSource = new MatTableDataSource(this.reportList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
        err => { console.log("failed to filter by city") });
  }

  ngOnInit() {
    this._viewService.getLocations().subscribe((data) => {
      this.reportList = data;
      this.dataSource = new MatTableDataSource(this.reportList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    },
      err => { console.log("failed to load locations data") });
  }
  ngAfterViewInit():void{
    
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}


export interface Location {
  startDate: Date;
  endDate: Date;
  city: string;
  address: string;
}
