export type EmployeeResponse = {
  id: string;
  name: string;
  admission_date: string;
  phone: string;
  image: string;
  job: string;
};

export type Employee = Omit<EmployeeResponse, "admission_date"> & {
  admissionDate: string;
};
