import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-600']};
    line-height: 1.3;
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    justify-content: center;
    gap: 1.4rem;
    margin-top: 2rem;
  }
`
