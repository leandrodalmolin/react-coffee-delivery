import styled, { css } from 'styled-components'

export type CardVariant = 'flat' | 'coloured-border'
export type CardBorderRadius = 'even' | 'uneven'
export type CardPadding = 'narrow' | 'medium'

interface CardContainerProps {
  variant: CardVariant
  borderRadius: CardBorderRadius
  padding: CardPadding
  alignCenter: Boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
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

  // Variant :: Coloured border
  ${({ theme, variant }) =>
    variant === 'coloured-border' &&
    css`
      border: 1px solid transparent;
      background-image: linear-gradient(
          ${theme['base-100']},
          ${theme['base-100']}
        ),
        radial-gradient(
          circle at top left,
          ${theme['yellow-500']},
          ${theme['purple-500']}
        );
      background-origin: border-box;
      background-clip: padding-box, border-box;
    `}
`
