import styled from 'styled-components'

export const TagsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 0.25rem;
  margin-bottom: 1rem;

  li {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme['yellow-700']};
    background-color: ${({ theme }) => theme['yellow-300']};
  }
`
