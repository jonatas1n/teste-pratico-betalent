import { IoIosSearch } from "react-icons/io";
import { StyledSearch } from "./Search.styles"

type SearchProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Search = ({onChange, value}: SearchProps) => {
  return (
    <StyledSearch>
      <input onChange={onChange} value={value} placeholder="Pesquisar" />
      <div className="icon">
        <IoIosSearch />
      </div>
    </StyledSearch>
  )
}