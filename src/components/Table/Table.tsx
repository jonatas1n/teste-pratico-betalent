import { StyledTable } from "./Table.styles";
import { Heading } from "../Heading";
import { TableRow } from "../TableRow";
import { Employee } from "../../types/employee";
import { FaCircle } from "react-icons/fa";

type TableProps = {
  headers: string[];
  data: Array<Employee>;
};

export const Table = ({ headers, data }: TableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={header} className={index > 1 ? "other-header" : ""}>
              <Heading variant="h2" value={header} />
            </th>
          ))}
          <th className="expand-header">
            <FaCircle />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <TableRow data={row} key={row.id} />
        ))}
      </tbody>
    </StyledTable>
  );
};
