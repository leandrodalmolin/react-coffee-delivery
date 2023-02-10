import { ReactNode } from 'react'
import { CardFooterContainer } from './styles'

interface CardFooterProps {
  children: ReactNode
}

export function CardFooter({ children }: CardFooterProps) {
  return <CardFooterContainer>{children}</CardFooterContainer>
}
