import styled from 'styled-components'

interface IRoundedIconContainerProps {
  background?: string
}

export const RoundedIconContainer = styled.div<IRoundedIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.white};
  background-color: ${({ background, theme }) =>
    background || theme['base-700']};

  svg {
    display: block;
    width: 1rem;
    height: 1rem;
  }
`
