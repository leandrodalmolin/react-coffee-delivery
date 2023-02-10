import styled from 'styled-components'

export const AddToBasketFormContainer = styled.form`
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

    svg {
      display: block;
    }
  }
`
