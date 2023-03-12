import styled from 'styled-components'

export const MessageContainer = styled.article`
  svg {
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme['yellow-700']};
  }

  h4 {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  p {
    margin: 0.3rem 0;
    line-height: 1.45;
  }
`
