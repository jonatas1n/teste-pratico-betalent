import { Container } from "../../components/Container";
import { Table } from "../../components/Table/Table";
import { Spinner } from "../../components/Spinner";
import useSWR from "swr";
import { transformEmployeeType } from "./utils";
import { FetchError } from "../../components/FetchError";
import { EmployeeResponse } from "../../types";

const fetcher = async (url: string): Promise<EmployeeResponse[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao carregar os dados");
  return res.json();
};

export const ContentTable = () => {
  const { data, isLoading, error } = useSWR("/api/employees", fetcher);

  const headers = ["Foto", "Nome", "Cargo", "Data de Admissão", "Telefone"];
  const employeesData = data ? data.map(transformEmployeeType) : [];

  if (isLoading) return <Spinner />;
  if (error) return <FetchError />;

  return (
    <Container>
      <Table headers={headers} data={employeesData} />
    </Container>
  );
};
