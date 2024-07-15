import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system'

import { IAlertContainer } from './types'

const light = 0.4

const TYPE = {
  error: css`
    background: ${props => lighten(light, props.theme.general.colors.danger)};
  `,
  success: css`
    background: ${props => lighten(light, props.theme.general.colors.success)};
  `,
  warning: css`
    background: ${props => lighten(light, props.theme.general.colors.warning)};
  `,
  info: css`
    background: ${props => lighten(light, props.theme.general.colors.info)};
  `,
}

export const AlertContainer = styled.div<IAlertContainer>`
  svg {
    margin-right: ${props => props.theme.general.space[2]};
  }

  ${props => props?.type && TYPE[props?.type]}

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`
