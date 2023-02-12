import styled from 'styled-components'
import { breakpoint } from '../../styles/breakpoints'

export const CheckoutContainer = styled.div`
  display: grid;
  gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media ${breakpoint.lg} {
    grid-template-columns: auto 450px;
  }
`
