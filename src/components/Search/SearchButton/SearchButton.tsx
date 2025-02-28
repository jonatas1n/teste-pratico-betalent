import { IoIosSearch } from "react-icons/io";
import { StyledSearchClose } from "./SearchButton.styles";

type SearchButtonProps = {
  onClick: VoidFunction;
  show: boolean;
}

export const SearchButton = ({onClick, show}: SearchButtonProps) => {
  return (
    <>
      {show ? <StyledSearchClose onClick={onClick} /> : <IoIosSearch className="icon"/>}
    </>
  )
};
