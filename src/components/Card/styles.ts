import styled from 'styled-components'

export type CardBorderRadius = 'even' | 'uneven'
export type CardPadding = 'narrow' | 'medium'

interface CardContainerProps {
  borderRadius: CardBorderRadius
  padding: CardPadding
  alignCenter: Boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme['base-200']};

  // Border radius options
  border-radius: ${({ borderRadius }) =>
    borderRadius === 'even' ? '6px' : '6px 36px'};

  // Padding options
  padding: ${({ padding }) =>
    padding === 'narrow' ? '1.25rem 1.5rem' : '2.5rem'};

  // Align center option
  align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'normal')};
  text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'left')};
`
