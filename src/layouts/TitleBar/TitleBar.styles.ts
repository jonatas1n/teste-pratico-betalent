import styled from "styled-components";
import * as motion from "motion/react-client";

export const StyledTitleBar = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: .5rem;

  @media screen and (max-width: 860px) {
    text-align: left;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;
