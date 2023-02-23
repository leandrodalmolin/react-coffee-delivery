import { ReactNode } from 'react'
import { CardHeadingContainer } from './styles'

interface ICardHeadingProps {
  heading: string
  subheading: string
  children?: ReactNode
}
export function CardHeading({
  heading,
  subheading,
  children,
}: ICardHeadingProps) {
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
