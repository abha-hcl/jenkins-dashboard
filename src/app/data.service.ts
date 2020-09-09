import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBuildInformation(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      }),
    };
    return this.http.get(environment.getallBuilds, httpOptions);
  }
  getBuildFailureInformation(number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46YWRtaW4='
      })
    };
    return this.http.get(environment.getBuildInformation + number + '/wfapi/describe', httpOptions);
  }
}
