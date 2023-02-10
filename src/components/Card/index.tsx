import { ReactNode } from 'react'
import { CardContainer, CardVariant } from './styles'

interface CardProps {
  variant?: CardVariant
  children?: ReactNode
}

export function Card({ variant = 'even', children, ...rest }: CardProps) {
  return (
    <CardContainer variant={variant} {...rest}>
      {children}
    </CardContainer>
  )
}
