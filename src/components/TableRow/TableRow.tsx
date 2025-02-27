import { Employee } from "../../types/employee";
import { Avatar } from "../Avatar/Avatar";
import { StyledTableRow } from "./TableRow.styles";
import { formatDate, formatPhone } from "../../utils";

type TableRowProps = {
  data: Employee;
};

export const TableRow = ({ data }: TableRowProps) => {
  const formattedAdmissionDate = formatDate(data.admissionDate);
  const formattedPhone = formatPhone(data.phone);

  return (
    <StyledTableRow>
      <td>
        <Avatar src={data.image} />
      </td>
      <td>{data.name}</td>
      <td>{data.job}</td>
      <td>{formattedAdmissionDate}</td>
      <td>{formattedPhone}</td>
    </StyledTableRow>
  );
};
