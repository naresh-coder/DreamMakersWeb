import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  providers: [EmployeeService]
})

export class EmployeeComponent implements OnInit {

  private employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee(this.employee.employeeId)
      .subscribe(data => this.employee = data);
  }

  newEmployee() {
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        employee => this.employee = employee
      );
    window.history.back();
  }

}
