import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Employee} from './employee';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {

  private url = 'http://172.16.4.89:8080/employee/1';
  private addUrl = 'http://localhost:8080/addEmployee';
  employee: Employee;

  constructor(private http: Http) {
  }

  getEmployee(): Observable<Employee> {
    // this.url += employeeId;
    return this.http.get(this.url)
      .map(res => <Employee> res.json());
  }

  /*getEmployee() {
    this.http.get('http://172.16.4.89:8080/employee/1')
      .map((data: Response) => {return data.json() as Employee;
      }).toPromise().then(x => {this.employee = x;
    });
  }*/

  addEmployee (employee: Employee): Observable<Employee>  {

    const body = JSON.stringify({ employee });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.addUrl, body, options)
      .map(res =>  <Employee> res.json());
  }

}
