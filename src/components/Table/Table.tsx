import { ReactNode } from "react";
import { StyledTable } from "./Table.styles";
import { Heading } from "../Heading";

type TableProps = {
  headers: string[];
  data: Array<Array<ReactNode>>;
};

export const Table = ({ headers, data }: TableProps) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>
              <Heading variant="h2" value={header} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {row.map((column) => (
              <td>{column}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
