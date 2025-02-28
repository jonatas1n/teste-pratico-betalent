import { StyledSearch } from "./Search.styles";
import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import { useNavigate } from "react-router-dom";
import { toSearchString } from "../../utils";
import { SearchButton } from "./SearchButton";

export const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useDebounce(() => setDebouncedTerm(searchTerm), 300, [searchTerm]);

  const clearInput = () => setSearchTerm("");

  useEffect(() => {
    const newSearch = toSearchString({ term: debouncedTerm });
    navigate({ search: newSearch }, { replace: true });
  }, [debouncedTerm, navigate]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledSearch initial={{ width: 0 }} animate={{ width: "unset" }}>
      <input
        onChange={handleSearchChange}
        value={searchTerm}
        placeholder="Pesquisar"
      />
      <SearchButton show={searchTerm.length > 0} onClick={clearInput} />
    </StyledSearch>
  );
};
