import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

 getBuildInformation() : Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',     
      'Authorization': 'Basic NzAyNTcyNTY6cmF5c2Fpbmk='
    })
  };
/*   let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  headers = headers.append('Authorization', 'Basic ' + btoa('70257256:raysaini'));
  headers = headers.append('Access-Control-Allow-Origin','*');   */
    //return this.http.get(environment.jenkinsUrl + "?tree=builds[number,result,duration,actions[parameters[name,value]]]", httpOptions);
    return this.http.get(environment.jenkinsUrl, httpOptions);
  }
 }
