import * as ToggleGroup from '@radix-ui/react-toggle-group'
import styled from 'styled-components'

export const ToggleRoot = styled(ToggleGroup.Root)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
`

export const ToggleItem = styled(ToggleGroup.Item)`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-400']};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.6;
  text-align: left;
  color: ${({ theme }) => theme['base-700']};
  background-color: ${({ theme }) => theme['base-400']};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme['transition-duration']};

  svg {
    color: ${({ theme }) => theme['purple-700']};
  }

  &[data-state='on'] {
    border: 1px solid ${({ theme }) => theme['purple-500']};
    background-color: ${({ theme }) => theme['purple-300']};
  }

  &:hover:not([data-state='on']) {
    background-color: ${({ theme }) => theme['base-500']};
  }
`
