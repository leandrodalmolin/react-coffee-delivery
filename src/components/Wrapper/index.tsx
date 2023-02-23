import { ReactNode } from 'react'
import { WrapperContainer } from './styles'

interface IWrapperProps {
  children: ReactNode
}

export function Wrapper({ children }: IWrapperProps) {
  return <WrapperContainer>{children}</WrapperContainer>
}
