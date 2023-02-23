import { ReactNode } from 'react'
import { RoundedIconContainer } from './styles'

interface IRoundedIconProps {
  background?: string
  children?: ReactNode
}

export function RoundedIcon({ children, background }: IRoundedIconProps) {
  return (
    <RoundedIconContainer background={background}>
      {children}
    </RoundedIconContainer>
  )
}
