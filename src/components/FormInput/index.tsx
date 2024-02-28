import { UseFormRegisterReturn } from 'react-hook-form'
import { ErrorMessage } from '../CheckoutForm/styles'

interface IFormInputProps {
  field: string
  label: string
  register?: UseFormRegisterReturn | null
  errorMessage?: string | null
}

export function FormInput({
  field,
  label,
  register = null,
  errorMessage = null,
  ...rest
}: IFormInputProps) {
  return (
    <div>
      <label htmlFor={field} className="visually-hidden">
        {label}
      </label>
      <input
        id={field}
        placeholder={label}
        aria-invalid={errorMessage ? 'true' : 'false'}
        {...register}
        {...rest}
      />
      {errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}
    </div>
  )
}
