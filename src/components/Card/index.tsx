import { ReactNode } from 'react'
import { CardBorderRadius, CardContainer, CardPadding } from './styles'

interface CardProps {
  borderRadius?: CardBorderRadius
  padding?: CardPadding
  alignCenter?: Boolean
  children?: ReactNode
}

export function Card({
  borderRadius = 'even',
  padding = 'medium',
  alignCenter = false,
  children,
  ...rest
}: CardProps) {
  return (
    <CardContainer
      borderRadius={borderRadius}
      padding={padding}
      alignCenter={alignCenter}
      {...rest}
    >
      {children}
    </CardContainer>
  )
}
