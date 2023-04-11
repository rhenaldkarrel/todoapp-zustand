import { forwardRef } from 'react'

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputTextProps>(function InputText({ type = 'text', ...rest }, ref) {
  return (
    <input
      type={type}
      ref={ref}
      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-slate-800 focus:ring-primary-400 focus:border-primary-400 block w-full p-2'
      {...rest}
    />
  )
})