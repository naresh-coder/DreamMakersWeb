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
    this.searchEmployee();
  }
  searchEmployee() {
    alert(this.employee);
    this.employeeService.getEmployee()
      .subscribe(employee => this.employee = employee);
    alert(this.employee);
  }

  newEmployee() {
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        employee => this.employee = employee
      );
    window.history.back();
  }

}
