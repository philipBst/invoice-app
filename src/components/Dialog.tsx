import { forwardRef } from 'react'
import classnames from 'classnames'

export type DialogProps = {} & React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>

const Dialog = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: React.PropsWithChildren<
      React.DetailedHTMLProps<
        React.DialogHTMLAttributes<HTMLDialogElement>,
        HTMLDialogElement
      >
    >,
    ref: React.ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog
      ref={ref}
      className={classnames(
        'text-white',
        'max-w-lg',
        'space-y-2',
        'p-10',
        'top-1/2',
        'left-1/2',
        '-translate-x-1/2',
        '-translate-y-1/2',
        'bg-sys-color-11',
        'rounded-md',
        'open:backdrop:bg-black/50',
        'transition-colors',
        'duration-700',
        className,
      )}
      {...props}
    >
      {children}
    </dialog>
  ),
)

export default Dialog
