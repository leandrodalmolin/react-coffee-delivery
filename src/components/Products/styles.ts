import styled from 'styled-components'
import { breakpoint } from '../../styles/breakpoints'

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem 2rem;
  margin: 3.4rem 0;

  @media ${breakpoint.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${breakpoint.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${breakpoint.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
