import * as ToastPrimitive from '@radix-ui/react-toast'
import { Outlet } from 'react-router-dom'
import { ToastViewport } from '../../components/Toast/styles'
import { Header } from './components/Header'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <DefaultLayoutContainer>
        <Header />
        <Outlet />
        <ToastViewport />
      </DefaultLayoutContainer>
    </ToastPrimitive.Provider>
  )
}
