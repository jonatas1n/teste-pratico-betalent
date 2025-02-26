import { PropsWithChildren } from "react"
import { StyledGrid } from "./Grid.styles"

export const Grid = ({children}: PropsWithChildren) => {
  return (
    <StyledGrid>{children}</StyledGrid>
  )
}