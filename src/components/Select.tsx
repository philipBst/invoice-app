import { forwardRef } from 'react'
import classnames from 'classnames'

import Option from './Option'

export type TOption = {
  value: string
  label: string
}

export type SelectProps = {
  options: TOption[]
}

const Select = forwardRef(
  (
    {
      options,
      className,
      ...props
    }: React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    > &
      SelectProps,
    ref: React.ForwardedRef<HTMLSelectElement>,
  ) => (
    <select
      ref={ref}
      {...props}
      className={classnames('bg-sys-color-1 pr-2 outline-none', className)}
    >
      {options.map(({ value, label }) => (
        <Option key={value.concat(label)} value={value} label={label} />
      ))}
    </select>
  ),
)

export default Select
