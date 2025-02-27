import { Container } from "../../components/Container";
import { Table } from "../../components/Table/Table";
import { Spinner } from "../../components/Spinner";
import useSWR from "swr";
import { transformEmployeeType } from "./utils";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ContentTable = () => {
  const { data, isLoading } = useSWR("/api/employees", fetcher);

  const headers = ["Foto", "Nome", "Cargo", "Data de Admissão", "Telefone"]
  const employeesData =
    data &&
    data.map(transformEmployeeType);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table headers={headers} data={employeesData} />
      )}
    </Container>
  );
};
