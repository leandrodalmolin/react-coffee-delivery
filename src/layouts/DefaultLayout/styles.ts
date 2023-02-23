import styled from 'styled-components'
import { breakpoint } from '../../styles/breakpoints'

export const DefaultLayoutContainer = styled.div`
  margin-bottom: 3.5rem;
`

export const Wrapper = styled.div`
  max-width: 75rem;
  margin: auto;
  padding: 0 1.75rem;

  @media ${breakpoint.md} {
    padding: 0 2.5rem;
  }
`
