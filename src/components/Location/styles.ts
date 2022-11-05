import styled from 'styled-components'

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme['purple-700']};
  background-color: ${({ theme }) => theme['purple-300']};

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`
