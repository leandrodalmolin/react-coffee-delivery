import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../styles'

interface ITextInputProps {
  field: string
  label: string
}

export function TextInput({ field, label }: ITextInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <label htmlFor={field} className="visually-hidden">
        {label}
      </label>
      <input
        {...register(field)}
        placeholder={label}
        aria-invalid={errors[field] ? 'true' : 'false'}
      />
      {errors[field] && (
        <ErrorMessage role="alert">
          {errors[field]?.message as string}
        </ErrorMessage>
      )}
    </div>
  )
}
