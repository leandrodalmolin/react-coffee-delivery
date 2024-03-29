import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ReactNode } from 'react'
import { Heading } from '../Heading'
import {
  ToastAction,
  ToastClose,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export const RadixToastProvider = ToastPrimitive.Provider
export const RadixToastViewport = ToastViewport

export interface IToastProps extends ToastPrimitive.ToastProps {
  title: string
  description: string
  actionComponent?: ReactNode | undefined
  actionAltText?: string
}

export function Toast({
  title,
  description,
  actionComponent = undefined,
  actionAltText = 'Action',
  ...rest
}: IToastProps) {
  return (
    <ToastRoot {...rest}>
      <ToastClose data-testid="close-button" asChild>
        <span aria-hidden>
          <X weight="bold" size={22} />
        </span>
      </ToastClose>

      <ToastTitle>
        <Heading variant="h5">{title}</Heading>
      </ToastTitle>

      <ToastPrimitive.Description>{description}</ToastPrimitive.Description>

      {actionComponent && (
        <ToastAction asChild altText={actionAltText}>
          {actionComponent}
        </ToastAction>
      )}
    </ToastRoot>
  )
}
