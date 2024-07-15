import { UiBox } from '../Box'

export interface IUiContainer {
  children: React.ReactNode
}

export const UiContainer = ({ children }: IUiContainer) => (
  <UiBox
    display='flex'
    alignItems='flex-stretch'
    flexDirection='column'
    maxWidth='1140px'
    margin='0 auto'
  >
    {children}
  </UiBox>
)
