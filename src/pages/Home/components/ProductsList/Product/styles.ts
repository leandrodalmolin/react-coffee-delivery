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
    gap: 1.4rem;
    margin-top: 2rem;
  }
`

export const AddToBasketForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  // Basket button
  > button {
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['purple-700']};
    cursor: pointer;
    transition: background-color ${({ theme }) => theme['transition-duration']};

    svg {
      display: block;
    }

    &:hover {
      background-color: ${({ theme }) => theme['purple-500']};
    }
  }
`
