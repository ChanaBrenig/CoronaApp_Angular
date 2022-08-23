import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";

@Injectable()
export class ViewService {
    constructor(private http: HttpClient) {

    }
    getLocations(): Observable< Location[]> {
        return this.http.get< Location[]>("https://localhost:44381/api/Location");
    }

    getLocationsByCity(city: string): Observable<Location[]> {
        return this.http.get<Location[]>("https://localhost:44381/api/Location/" + city);
    }
   

}

