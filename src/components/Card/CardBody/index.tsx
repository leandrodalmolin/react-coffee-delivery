import { ReactNode } from 'react'
import { CardBodyContainer } from './styles'

interface CardBodyProps {
  children: ReactNode
}

export function CardBody({ children }: CardBodyProps) {
  return <CardBodyContainer>{children}</CardBodyContainer>
}
