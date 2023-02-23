import { useContext } from 'react'
import { ToastContext } from '../contexts/ToastContext'

/**
 * Inspired by https://github.com/lucasjungdeveloper/radix-tailwind
 */
export const useToast = () => useContext(ToastContext)
