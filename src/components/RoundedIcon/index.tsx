import { ReactNode } from 'react'
import { RoundedIconContainer } from './styles'

interface RoundedIconProps {
  background?: string
  children?: ReactNode
}

export function RoundedIcon({ children, background }: RoundedIconProps) {
  return (
    <RoundedIconContainer background={background}>
      {children}
    </RoundedIconContainer>
  )
}
