import styled from 'styled-components'
import {
  border,
  background,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from 'styled-system'

import { IBox } from './types'

export const Box = styled('div')<IBox>(
  border,
  background,
  flexbox,
  layout,
  position,
  shadow,
  space,
)
