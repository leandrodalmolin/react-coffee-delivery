import styled, { keyframes } from 'styled-components'
import * as ToastPrimitive from '@radix-ui/react-toast'

const hide = () => keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

const slideIn = () => keyframes`
  from { transform: translateX(calc(100%)); }
  to { transform: translateX(0); }
`

const swipeOut = () => keyframes`
  from { transform: translateX(var(--radix-toast-swipe-end-x)); }
  to { transform: translateX(calc(100%)); }
`

export const ToastViewport = styled(ToastPrimitive.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 350px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 0.625rem;
  list-style: none;
  z-index: 9999;
  outline: none;

  &:focus {
    box-shadow: 0 0 0;
    outline: none;
  }
`

export const ToastRoot = styled(ToastPrimitive.Root)`
  position: relative;
  display: grid;
  grid-gap: 0.35rem;
  border-radius: 6px;
  padding: 1.25rem;
  margin: 0 1.25rem 1.25rem 1.25rem;
  background-color: ${({ theme }) => theme['base-100']};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }
  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`

export const ToastTitle = styled(ToastPrimitive.Title)`
  margin: 0;
  line-height: 1;
`

export const ToastAction = styled(ToastPrimitive.Action)`
  border-radius: 6px;
  border: 0;
  margin-top: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['purple-700']};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme['transition-duration']};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['purple-500']};
  }
`

export const ToastClose = styled(ToastPrimitive.Close)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: 0;
  color: ${({ theme }) => theme['purple-700']};
  background-color: transparent;
  transition: color ${({ theme }) => theme['transition-duration']};
  cursor: pointer;

  svg {
    display: block;
  }

  &:hover {
    color: ${({ theme }) => theme['purple-500']};
  }
`
