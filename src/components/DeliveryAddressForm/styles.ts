import styled from 'styled-components'
import { breakpoint } from '../../styles/breakpoints'

export const DeliveryAddressFormContainer = styled.form`
  display: grid;
  gap: 0.75rem;

  input {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme['base-400']};
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-600']};
    background-color: ${({ theme }) => theme['base-300']};
  }

  @media ${breakpoint.sm} {
    grid-template-columns: repeat(3, 1fr);

    .span-full {
      grid-column: 1 / span 3;
    }
  }
`
