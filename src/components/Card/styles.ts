import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme['base-200']};
`
