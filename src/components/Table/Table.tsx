import { StyledTable } from "./Table.styles";
import { Heading } from "../Heading";
import { TableRow } from "../TableRow";
import { Employee } from "../../types/employee";
import { BsDot } from "react-icons/bs";
import * as motion from "motion/react-client";

type TableProps = {
  headers: string[];
  data: Array<Employee>;
};

export const Table = ({ headers, data }: TableProps) => {
  return (
    <StyledTable>
      <thead>
        <motion.tr
          initial={{ opacity: 0, translateY: 16 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          {headers.map((header, index) => (
            <th key={header} className={index > 1 ? "other-header" : ""}>
              <Heading variant="h2" value={header} />
            </th>
          ))}
          <th className="expand-header">
            <BsDot />
          </th>
        </motion.tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow data={row} key={row.id} index={index} />
        ))}
      </tbody>
    </StyledTable>
  );
};
