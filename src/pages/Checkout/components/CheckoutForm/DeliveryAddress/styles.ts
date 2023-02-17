import styled, { css } from 'styled-components'
import { breakpoint } from '../../../../../styles/breakpoints'

export const DeliveryAddressContainer = styled.div`
  display: grid;
  gap: 0.75rem;

  input {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme['base-400']};
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-700']};
    background-color: ${({ theme }) => theme['base-300']};

    &[aria-invalid='true'] {
      border-color: ${({ theme }) => theme['error-300']};
      background-color: ${({ theme }) => theme['error-100']};
    }

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: ${({ theme }) => theme['base-600']};
      opacity: 1; /* Firefox */
    }

    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: ${({ theme }) => theme['base-600']};
    }

    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: ${({ theme }) => theme['base-600']};
    }
  }

  @media ${breakpoint.sm} {
    grid-template-columns: repeat(3, 1fr);

    .span-full {
      grid-column: 1 / span 3;
    }
  }
`

interface FormControlProps {
  optional?: Boolean
}

export const FormControl = styled.div<FormControlProps>`
  ${({ theme, optional }) => {
    if (optional) {
      const containerWidth = '4.5rem'

      return css`
        // Input wrapper
        > div {
          position: relative;

          &::after {
            content: 'Optional';
            position: absolute;
            top: 0;
            right: 0;
            width: ${containerWidth};
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-style: italic;
            color: ${theme['base-600']};
          }

          input {
            padding-right: ${containerWidth};
          }
        }
      `
    }
  }}
`
