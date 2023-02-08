import styled from 'styled-components'

export const QuantityControlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  height: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['base-400']};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`

export const InputNumber = styled.input`
  border: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-900']};
  background-color: transparent;
  text-align: center;

  // Hide arrow controls
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
