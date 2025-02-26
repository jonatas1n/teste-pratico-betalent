import { PropsWithChildren } from "react"
import { StyledTitleBar } from "./TitleBar.styles"

export const TitleBar = ({children}: PropsWithChildren) => {
  return (
    <StyledTitleBar>{children}</StyledTitleBar>
  )
}
