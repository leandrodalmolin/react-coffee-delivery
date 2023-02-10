import styled from 'styled-components'

export type CardVariant = 'even' | 'uneven'

interface CardContainerProps {
  variant: CardVariant
  alignCenter: Boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  background-color: ${({ theme }) => theme['base-200']};

  // Variants
  border-radius: ${({ theme, variant }) =>
    variant === 'even' ? '6px' : '6px 36px'};

  // Align centre
  align-items: ${({ theme, variant, alignCenter }) =>
    alignCenter ? 'center' : 'normal'};
  text-align: ${({ theme, variant, alignCenter }) =>
    alignCenter ? 'center' : 'left'};
`
