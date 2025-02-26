import { StyledTitle } from "./Title.styles"

type TitleProps = {
  title: string;
}
export const Title = ({title}: TitleProps) => {
  return (
  <StyledTitle>
    {title}
  </StyledTitle>
  )
}
