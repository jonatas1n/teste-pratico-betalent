import { PropsWithChildren } from "react"
import { StyledBody } from "./Body.styles"

export const Body = ({children}: PropsWithChildren) => {
  return (
    <StyledBody>{children}</StyledBody>
  )
}