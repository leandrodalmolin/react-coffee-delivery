import styled from 'styled-components'
import { breakpoint } from '../../../../styles/breakpoints'

export const CheckoutFormContainer = styled.form`
  display: grid;
  gap: 2rem;
  margin-top: 1.75rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media ${breakpoint.lg} {
    grid-template-columns: auto 450px;
  }
`

export const SubmitButton = styled.button`
  border-radius: 6px;
  border: 0;
  margin-top: 1.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['yellow-500']};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme['transition-duration']};

  &:hover {
    background-color: ${({ theme }) => theme['yellow-700']};
  }
`
