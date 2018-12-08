import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {Address} from './address';
import {SkillMatrixs} from './skillMatrixs';

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
    /*this.employeeService.getEmployee()
      .subscribe(data => this.employee = data);*/
    this.employee = <Employee>{'employeeId': 1, 'name': 'RK', 'emailId': 'rk@enquero.com', 'phoneNumber': '123',
      'gender': 'Male', 'approverId': 'balwant@enquero.com',
      'address': <Address> {'address1': 'address1', 'address2': 'address2', 'area': 'Koramangala',
      'city': 'BLR', 'state': 'Karnataka', 'country': 'India', 'pincode': 560100},
      'skillMatrixs': <SkillMatrixs[]>[{'skillMatrixId': 1, 'skillCategory': 'UI', 'skillSubCategory': 'reactJs',
        'designation': 'Senior Engineer', 'employeeId': 1,
      'skillId': 1, 'numberofYears': 2, 'numberofMonths': 10, 'isCertified': 'N', 'nameofInstitute': 'Xyz Inc',
      'score': '70%', 'kpiId': 1}]};
    console.log(this.employee);
  }

  newEmployee() {
    this.employeeService.addEmployee(this.employee)
      .subscribe(
        data => this.employee = data
      );
    window.history.back();
  }

}
