import { Heading } from "../Heading";
import { StyledError } from "./FetchError.styles";

const ERROR_TEXT =
  "Ocorreu um erro ao obter dados dos funcionários. Aguarde e tente novamente.";

export const FetchError = () => {
  return (
    <StyledError>
      <Heading variant="h1" value={ERROR_TEXT} />
    </StyledError>
  );
};
