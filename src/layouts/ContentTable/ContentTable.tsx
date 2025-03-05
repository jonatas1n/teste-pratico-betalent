import { Container } from "../../components/Container";
import { Table } from "../../components/Table/Table";
import { Spinner } from "../../components/Spinner";
import useSWR from "swr";
import { searchFilter, transformEmployeeType } from "./utils";
import { FetchError } from "../../components/FetchError";
import { EmployeeResponse } from "../../types";
import { useQueryParams } from "../../utils";
import { TABLE_HEADERS } from "./constants";

const fetcher = async (url: string): Promise<EmployeeResponse[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao carregar os dados");
  return res.json();
};

export const ContentTable = () => {
  const query = useQueryParams();
  const { data, isLoading, error } = useSWR("/api/employees", fetcher);

  const employeesData = data ? data.map(transformEmployeeType) : [];

  const searchTerm = query.get("term") ?? null;
  const filteredData = searchTerm
    ? searchFilter(employeesData, searchTerm)
    : employeesData;

  if (isLoading) return <Spinner />;
  if (error) return <FetchError />;

  return (
    <Container>
      <Table headers={TABLE_HEADERS} data={filteredData} />
    </Container>
  );
};
