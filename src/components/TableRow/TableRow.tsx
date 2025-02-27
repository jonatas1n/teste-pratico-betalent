import { Employee } from "../../types/employee";
import { Avatar } from "../Avatar/Avatar";
import { StyledTableRow } from "./TableRow.styles";
import { formatDate, formatPhone } from "../../utils";
import { useToggle } from "usehooks-ts";
import { FaChevronDown } from "react-icons/fa6";

type TableRowProps = {
  data: Employee;
};

export const TableRow = ({ data }: TableRowProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const formattedAdmissionDate = formatDate(data.admissionDate);
  const formattedPhone = formatPhone(data.phone);

  return (
    <StyledTableRow onClick={toggleIsOpen}>
      <tr>
        <td>
          <Avatar src={data.image} />
        </td>
        <td>{data.name}</td>
        <td className="other-data">{data.job}</td>
        <td className="other-data">{formattedAdmissionDate}</td>
        <td className="other-data">{formattedPhone}</td>
        <td className="expand-icon">
          <FaChevronDown />
        </td>
      </tr>
      {isOpen && (
        <tr className="expand-area">
          <td colSpan={3}>
            <table>
              <tr>
                <th>Cargo</th>
                <td>{data.job}</td>
              </tr>
              <tr>
                <th>Data de admissão</th>
                <td>{formattedAdmissionDate}</td>
              </tr>
              <tr>
                <th>Telefone</th>
                <td>{formattedPhone}</td>
              </tr>
            </table>
          </td>
        </tr>
      )}
    </StyledTableRow>
  );
};
