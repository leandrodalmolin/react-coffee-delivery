import styled from 'styled-components'

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
  margin-top: 3.4rem;
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

    svg {
      display: block;
    }
  }
`
