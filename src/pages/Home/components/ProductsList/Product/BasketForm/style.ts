import styled from 'styled-components'

export const BasketFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  // Submit button
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
