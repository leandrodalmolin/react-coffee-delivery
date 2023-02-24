import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const RadioRoot = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
`

export const RadioItem = styled(RadioGroup.Item)`
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

  &[data-state='checked'] {
    border: 1px solid ${({ theme }) => theme['purple-500']};
    background-color: ${({ theme }) => theme['purple-300']};
  }

  &:hover:not([data-state='checked']):not([aria-invalid='true']) {
    background-color: ${({ theme }) => theme['base-500']};
  }

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme['error-500']};
    background-color: ${({ theme }) => theme['error-100']};
  }
`
