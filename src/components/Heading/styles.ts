import styled, { css } from 'styled-components'

export const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const

interface IHeadingContainerProps {
  variant: keyof typeof variantMap
}

export const HeadingContainer = styled.div<IHeadingContainerProps>`
  font-family: ${({ theme }) => theme.font.cursive};
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme['base-800']};

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 3.5rem;
        `

      case 'h2':
        return css`
          font-size: 3rem;
        `

      case 'h3':
        return css`
          font-size: 2rem;
        `

      case 'h4':
        return css`
          font-size: 1.25rem;
        `

      case 'h5':
        return css`
          margin-bottom: 0.25rem;
          font-size: 1.125rem;
        `

      case 'h6':
        return css`
          font-size: 0.75rem;
        `
    }
  }}
`
