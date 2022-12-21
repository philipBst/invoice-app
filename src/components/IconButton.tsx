import { forwardRef } from 'react'

export type IconButtonProps = {
  startIcon?: React.ReactNode
}

const IconButton = forwardRef(
  (
    {
      startIcon,
      ...props
    }: IconButtonProps &
      React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      className="bg-sys-color-3 flex items-center justify-center gap-4 rounded-full p-2 pr-4"
      {...props}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        {startIcon}
      </span>
      <span className="text-sm font-bold">New Invoice</span>
    </button>
  ),
)

export default IconButton
