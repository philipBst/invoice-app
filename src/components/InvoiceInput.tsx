import { forwardRef } from 'react'
import classnames from 'classnames'

export type InvoiceInputProps = {
  label: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const InvoiceInput = forwardRef(
  (
    { label, className, ...props }: InvoiceInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={label} className="text-xs text-sys-color-16">
        {label}
      </label>
      <input
        id={label}
        ref={ref}
        type="text"
        className={classnames(
          'border',
          'border-sys-color-12',
          'w-full',
          'outline-none',
          'bg-sys-color-2',
          'rounded-sm',
          'px-2',
          'py-1',
          'text-white',
          className,
        )}
        {...props}
      />
    </div>
  ),
)

export default InvoiceInput
