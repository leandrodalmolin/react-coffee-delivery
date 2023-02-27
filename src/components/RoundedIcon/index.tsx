import { ReactNode } from 'react'
import { RoundedIconContainer } from './styles'

interface IRoundedIconProps {
  backgroundColor?: string
  children?: ReactNode
}

export function RoundedIcon({ backgroundColor, children }: IRoundedIconProps) {
  return (
    <RoundedIconContainer backgroundColor={backgroundColor}>
      {children}
    </RoundedIconContainer>
  )
}
