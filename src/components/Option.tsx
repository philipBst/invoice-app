import { forwardRef } from 'react'

const Option = forwardRef(
  (
    props: React.DetailedHTMLProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >,
    ref: React.ForwardedRef<HTMLOptionElement>,
  ) => <option ref={ref} {...props}></option>,
)

export default Option
