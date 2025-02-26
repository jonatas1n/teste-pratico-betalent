import { HeadingStyles } from "./Heading.styles";

type HeadingProps = {
  value: string;
  variant?: "h1" | "h2" | "h3";
}

export const Heading = ({value, variant="h1"}: HeadingProps) => {
  return (
    <HeadingStyles variant={variant}>{value}</HeadingStyles>
  )
};