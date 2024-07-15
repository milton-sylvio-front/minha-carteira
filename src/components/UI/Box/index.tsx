import { IUiBox } from './types'
import { Box } from './styles'

export const UiBox = ({ children, ...rest }: IUiBox) => (
  <Box {...rest}>{children}</Box>
)
