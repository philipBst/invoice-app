import { forwardRef } from 'react'

export type DialogProps = {} & React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>

const Dialog = forwardRef(
  (
    {
      children,
      ...props
    }: React.PropsWithChildren<
      React.DetailedHTMLProps<
        React.DialogHTMLAttributes<HTMLDialogElement>,
        HTMLDialogElement
      >
    >,
    ref: React.ForwardedRef<HTMLDialogElement>,
  ) => (
    <dialog ref={ref} {...props}>
      {children}
    </dialog>
  ),
)

export default Dialog
