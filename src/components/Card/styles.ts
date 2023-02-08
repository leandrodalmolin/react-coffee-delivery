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

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  // Description
  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-600']};
    line-height: 1.3;
    margin-top: 0.5rem;
  }
`

export const CardFooter = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-top: 2rem;
`
