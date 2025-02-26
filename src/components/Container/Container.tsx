import { PropsWithChildren } from "react"
import { StyledContainer } from "./Container.styles"

export const Container = ({children}: PropsWithChildren) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}