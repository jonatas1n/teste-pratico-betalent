import { PropsWithChildren } from "react"
import { StyledHeader } from "./Header.styles"

export const Header = ({children}: PropsWithChildren) => {
  return (
    <StyledHeader>{children}</StyledHeader>
  )
}