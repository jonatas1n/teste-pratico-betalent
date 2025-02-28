import { Employee, EmployeeResponse } from "../../types/employee";

export const transformEmployeeType = (employee: EmployeeResponse) => {
  const {admission_date: admissionDate, ...employeeData} = employee;
  return {...employeeData, admissionDate}
}

export const searchFilter = (data: Employee[], searchTerm: string) => {
  const normalize = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  const filteredData = data.filter(({name, job, phone}) => {
    const normalizedTerm = normalize(searchTerm);
    const normalizedName = normalize(name);
    const normalizedJob = normalize(job);
    return normalizedJob.includes(normalizedTerm) || normalizedName.includes(normalizedTerm) || phone.includes(normalizedTerm);
  });

  return filteredData;
}