import { StyledTable } from "./Table.styles";
import { Heading } from "../Heading";
import { TableRow } from "../TableRow";
import { Employee } from "../../types/employee";

type TableProps = {
  headers: string[];
  data: Array<Employee>;
};

export const Table = ({ headers, data }: TableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>
              <Heading variant="h2" key={header} value={header} />
            </th>
          ))}
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
