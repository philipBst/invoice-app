import { forwardRef } from 'react'
import classnames from 'classnames'

const Button = forwardRef(
  (
    {
      className,
      children,
      ...props
    }: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      className={classnames('rounded-full py-3 px-5', className)}
      {...props}
    >
      {children}
    </button>
  ),
)

export default Button
