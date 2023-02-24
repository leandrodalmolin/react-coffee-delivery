import { ReactNode } from 'react'
import { HeadingContainer, variantMap } from './styles'

interface HeadingProps {
  variant: keyof typeof variantMap
  children: ReactNode
}

export function Heading({ variant, children }: HeadingProps) {
  const selectedComponent = variantMap[variant]
  return (
    <HeadingContainer variant={variant} as={selectedComponent}>
      {children}
    </HeadingContainer>
  )
}
