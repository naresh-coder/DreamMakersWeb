import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Employee} from './employee';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {

  private url = 'http://172.16.4.89:8080/employee/1';
  private addUrl = 'http://localhost:8080/addEmployee';

  constructor(private http: Http) {
  }

  getEmployee(): Observable<Employee> {
    alert('im in');
    // this.url += employeeId;
    return this.http.get(this.url)
      .map(res => <Employee> res.json());
  }

  addEmployee (employee: Employee): Observable<Employee>  {

    const body = JSON.stringify({ employee });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.addUrl, body, options)
      .map(res =>  <Employee> res.json());
  }

}
