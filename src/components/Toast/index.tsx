import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'
import { HeadingSm } from '../../styles/typography'
import { ToastAction, ToastClose, ToastRoot, ToastTitle } from './styles'

export type ToastRefType = {
  notify: () => void
}

interface IToastProps extends ToastPrimitive.ToastProps {
  title: string
  description: string
  actionAltText?: string
  children?: ReactNode
}

// eslint-disable-next-line react/display-name
export const Toast = forwardRef<ToastRefType, IToastProps>(
  (props, forwardedRef) => {
    const { title, description, actionAltText = '', children, ...rest } = props
    const [open, setOpen] = useState(false)

    useImperativeHandle(forwardedRef, () => ({
      notify: () => setOpen(true),
    }))

    return (
      <ToastRoot open={open} onOpenChange={setOpen} {...rest}>
        <ToastTitle asChild>
          <HeadingSm>{title}</HeadingSm>
        </ToastTitle>
        <ToastPrimitive.Description>{description}</ToastPrimitive.Description>
        {children && (
          <ToastAction asChild altText={actionAltText}>
            {children}
          </ToastAction>
        )}
        <ToastClose aria-label="Close">
          <span aria-hidden>
            <X weight="bold" size={22} />
          </span>
        </ToastClose>
      </ToastRoot>
    )
  },
)
