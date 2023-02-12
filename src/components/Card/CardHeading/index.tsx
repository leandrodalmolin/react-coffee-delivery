import { ReactNode } from 'react'
import { CardHeadingContainer } from './styles'

interface CardHeadingProps {
  heading: string
  subheading: string
  children?: ReactNode
}
export function CardHeading({
  heading,
  subheading,
  children,
}: CardHeadingProps) {
  return (
    <CardHeadingContainer>
      {children}
      <div>
        <h4>{heading}</h4>
        <p>{subheading}</p>
      </div>
    </CardHeadingContainer>
  )
}
