import styled from 'styled-components'

export const CardBodyContainer = styled.div`
  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-600']};
    line-height: 1.3;
    margin-top: 0.5rem;
  }
`
