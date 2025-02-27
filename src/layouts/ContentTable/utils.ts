import { EmployeeResponse } from "../../types/employee";

export const transformEmployeeType = (employee: EmployeeResponse) => {
  const {admission_date: admissionDate, ...employeeData} = employee;
  return {...employeeData, admissionDate}
}
