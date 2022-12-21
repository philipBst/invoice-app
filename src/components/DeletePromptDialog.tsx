import { useEffect, useRef } from 'react'
import Dialog from './Dialog'

export type DeletePromptDialogProps = {
  id: string
  open: boolean
  onConfirm?: () => void
  onCancel?: () => void
}

const DeletePromptDialog: React.FC<
  React.PropsWithChildren<DeletePromptDialogProps>
> = ({ id, open, onConfirm, onCancel }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [open])

  return (
    <Dialog ref={dialogRef}>
      <p className="font-bold text-2xl">Confirm Deletion</p>
      <p>
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </p>
      <form method="dialog" className="w-full text-right space-x-4">
        <button
          className="bg-sys-color-12 rounded-full py-3 px-5"
          value="submit"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-sys-color-13 rounded-full py-3 px-5"
          value="submit"
          onClick={onConfirm}
        >
          Delete
        </button>
      </form>
    </Dialog>
  )
}

export default DeletePromptDialog
