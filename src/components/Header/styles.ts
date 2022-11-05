import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0;
`
export const HeaderActions = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    border-radius: 6px;
    padding: 0.5rem;
    color: ${({ theme }) => theme['yellow-700']};
    background-color: ${({ theme }) => theme['yellow-300']};

    svg {
      display: block;
    }
  }
`
