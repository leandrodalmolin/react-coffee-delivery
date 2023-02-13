import { ReactNode } from 'react'
import {
  CardBorderRadius,
  CardContainer,
  CardPadding,
  CardVariant,
} from './styles'

interface CardProps {
  variant?: CardVariant
  borderRadius?: CardBorderRadius
  padding?: CardPadding
  alignCenter?: Boolean
  children?: ReactNode
}

export function Card({
  variant = 'flat',
  borderRadius = 'even',
  padding = 'medium',
  alignCenter = false,
  children,
  ...rest
}: CardProps) {
  return (
    <CardContainer
      variant={variant}
      borderRadius={borderRadius}
      padding={padding}
      alignCenter={alignCenter}
      {...rest}
    >
      {children}
    </CardContainer>
  )
}
