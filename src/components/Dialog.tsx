import { forwardRef } from 'react'

export type DialogProps = {} & React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>

const Dialog: React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDialogElement>
> = forwardRef(
  ({ children, ...props }: React.PropsWithChildren<DialogProps>, ref) => (
    <dialog ref={ref} {...props}>
      {children}
    </dialog>
  ),
)

export default Dialog
