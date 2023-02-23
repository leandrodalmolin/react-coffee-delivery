import { v4 as uuidv4 } from 'uuid'
import { createContext, ReactNode, useState } from 'react'
import {
  IToastProps,
  Toast,
  RadixToastProvider,
  RadixToastViewport,
} from '../components/Toast'

type IToastContextProps = (toast: IToastProps) => void

export const ToastContext = createContext({} as IToastContextProps)

interface IToastContextProviderProps {
  children: ReactNode
}

export const ToastContextProvider = ({
  children,
}: IToastContextProviderProps) => {
  const [toasts, setToasts] = useState<IToastProps[]>([])

  /**
   * Add/show toast every time useToast() is called
   *
   * How to use:
   *
   * const toast = useToast()
   * toast({
   *  title: 'Your title',
   *  description: 'Your description'
   * })
   */
  function addToast(toast: IToastProps) {
    toast.id = uuidv4()
    setToasts((toasts) => [...toasts, toast])
  }

  /**
   * Remove/hide toast
   *
   * Triggered in the end of the timeout
   * when open state changes from true to false
   */
  function removeToast(toast: IToastProps) {
    setToasts((toasts) => toasts.filter((t) => t.id !== toast.id))
  }

  return (
    <ToastContext.Provider value={addToast}>
      <RadixToastProvider>
        {children}

        {toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              onOpenChange={removeToast.bind(null, toast)}
              {...toast}
            />
          )
        })}

        <RadixToastViewport />
      </RadixToastProvider>
    </ToastContext.Provider>
  )
}
