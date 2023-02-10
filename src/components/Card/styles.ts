import styled from 'styled-components'

export type CardVariant = 'even' | 'uneven'

interface CardContainerProps {
  variant: CardVariant
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: ${({ theme, variant }) =>
    variant === 'even' ? '6px' : '6px 36px'};
  padding: 1.25rem 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme['base-200']};
`
