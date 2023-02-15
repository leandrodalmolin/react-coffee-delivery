import styled from 'styled-components'
import { breakpoint } from '../../../../styles/breakpoints'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  @media ${breakpoint.md} {
    padding: 2.5rem 0;
  }
`
export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    position: relative;
    border-radius: 6px;
    padding: 0.5rem;
    color: ${({ theme }) => theme['yellow-700']};
    background-color: ${({ theme }) => theme['yellow-300']};

    svg {
      display: block;
    }

    // Badge
    span {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 1.25rem;
      min-height: 1.25rem;
      border-radius: 50rem;
      padding: 0.25rem 0.35rem;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['yellow-700']};
      transform: translate(50%, -50%);
    }
  }
`
