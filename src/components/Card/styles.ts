import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme['base-200']};

  img {
    margin-top: -2.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-600']};
    line-height: 1.3;
  }
`

export const CardFooter = styled.div`
  display: flex;
`

export const TagContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.25rem;

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
