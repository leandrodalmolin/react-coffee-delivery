import { ReactNode } from 'react'
import { CardContainer, CardVariant } from './styles'

interface CardProps {
  variant?: CardVariant
  alignCenter?: Boolean
  children?: ReactNode
}

export function Card({
  variant = 'even',
  children,
  alignCenter = false,
  ...rest
}: CardProps) {
  return (
    <CardContainer variant={variant} alignCenter={alignCenter} {...rest}>
      {children}
    </CardContainer>
  )
}
