import { forwardRef } from 'react'
import Dialog from './Dialog'

export type DeletePromptDialogProps = {
  onDelete?: () => void
  onDeleteCancel?: () => void
} & React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  >
>

const DeletePromptDialog = forwardRef(
  (
    { id, onDelete, onDeleteCancel, ...props }: DeletePromptDialogProps,
    ref?: React.ForwardedRef<HTMLDialogElement>,
  ) => (
    <Dialog id={id} {...props} ref={ref}>
      <p className="font-bold text-2xl">Confirm Deletion</p>
      <p>
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </p>
      <form method="dialog" className="w-full text-right space-x-4">
        <button
          className="bg-sys-color-12 rounded-full py-3 px-5"
          value="submit"
          onClick={onDeleteCancel}
        >
          Cancel
        </button>
        <button
          className="bg-sys-color-13 rounded-full py-3 px-5"
          value="submit"
          onClick={onDelete}
        >
          Delete
        </button>
      </form>
    </Dialog>
  ),
)

export default DeletePromptDialog
