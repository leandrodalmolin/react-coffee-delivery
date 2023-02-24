import styled from 'styled-components'
import { breakpoint } from '../../styles/breakpoints'

export const SuccessMessage = styled.div`
  margin: min(5rem, 10%) 0 2.5rem;
  line-height: 1.3;

  h2 {
    margin-bottom: 0.75rem;
    font-family: ${({ theme }) => theme.font.cursive};
    font-size: 2rem;
    line-height: 1.1;
    color: ${({ theme }) => theme['yellow-700']};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-800']};
  }

  @media ${breakpoint.md} {
    h2 {
      line-height: 1.3;
    }
  }
`

export const SuccessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: min(8vw, 6.25rem);

  img {
    display: block;
    width: 100%;
  }
`

export const SummaryList = styled.ul`
  display: grid;
  gap: 1.25rem;
  list-style: none;
  line-height: 1.3;

  li {
    display: flex;
    gap: 0.75rem;
  }

  @media ${breakpoint.sm} {
    gap: 2rem;
  }
`
