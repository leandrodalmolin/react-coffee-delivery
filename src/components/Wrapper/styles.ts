import styled from 'styled-components'
import { breakpoint } from '../../styles/breakpoints'

export const WrapperContainer = styled.div`
  max-width: 75rem;
  margin: auto;
  padding: 0 1.75rem;

  @media ${breakpoint.md} {
    padding: 0 2.5rem;
  }
`
