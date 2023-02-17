import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    // Default: will be removed in Forced Color Modes
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-700']};
    // Fallback: will be visible with custom system colors in Forced Color Modes
    outline: 1px solid transparent;
  }

  body {
    background: ${(props) => props.theme['base-100']};
    color: ${(props) => props.theme['base-700']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  textarea {
    font-family: ${(props) => props.theme.font['sans-serif']};
    font-weight: 400;
    font-size: 1rem;
  }

  // SR only
  .visually-hidden {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

  // Links
  a {
    text-underline-offset: 0.1em;
    color: ${(props) => props.theme['purple-700']};
    transition: color ${(props) => props.theme['transition-duration']};

    &:hover {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`
