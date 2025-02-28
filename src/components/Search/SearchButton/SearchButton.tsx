import { IoIosSearch } from "react-icons/io";
import { StyledSearchClose } from "./SearchButton.styles";
import * as motion from "motion/react-client";

type SearchButtonProps = {
  onClick: VoidFunction;
  show: boolean;
};

export const SearchButton = ({ onClick, show }: SearchButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25 }}
    >
      {show ? (
        <StyledSearchClose onClick={onClick} />
      ) : (
        <IoIosSearch className="icon" />
      )}
    </motion.div>
  );
};
