import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ReportService {
    constructor(private http: HttpClient) {

    }
    getByPatientId(patientID: string): Observable<Location[]> {
        return this.http.get<Location[]>("https://localhost:44381/api/Patient/" + patientID);
    }
    deleteLocation(locationID: number): Observable<void> {
        return this.http.delete<void>("https://localhost:44381/api/Location/" + locationID);
    }
    addLocation(Location: Location):Observable<void> {
        return this.http.post<void>("https://localhost:44381/api/Location" ,Location);
    }

}

