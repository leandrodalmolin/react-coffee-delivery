import styled from 'styled-components'

export const PriceTagContainer = styled.div`
  // Currency symbol
  span {
    font-family: ${({ theme }) => theme.font['sans-serif']};
    font-size: 0.875rem;
    font-weight: 400;
    padding-right: 0.25rem;
  }

  // Price
  strong {
    font-family: ${({ theme }) => theme.font.cursive};
    font-size: 1.5rem;
    font-weight: 800;
  }
`
