import { Employee } from "../../types/employee";
import { Avatar } from "../Avatar/Avatar";
import { StyledTableRow } from "./TableRow.styles";
import { formatDate, formatPhone } from "../../utils";
import { useToggle } from "react-use";
import { FaChevronDown } from "react-icons/fa6";
import * as motion from "motion/react-client";

type TableRowProps = {
  data: Employee;
  index: number;
};

export const TableRow = ({ data, index }: TableRowProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const formattedAdmissionDate = formatDate(data.admissionDate);
  const formattedPhone = formatPhone(data.phone);

  return (
    <StyledTableRow onClick={toggleIsOpen}>
      <motion.tr
        initial={{ opacity: 0, translateY: -16 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.0625 * index }}
      >
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
      </motion.tr>
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
