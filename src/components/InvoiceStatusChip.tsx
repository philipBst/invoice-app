import classnames from 'classnames'

import type { InvoiceStatus } from '../types'

export type InvoiceStatusChipProps = {
  status: InvoiceStatus
}

const InvoiceStatusChip: React.FC<InvoiceStatusChipProps> = ({ status }) => {
  const isDraft = status === 'draft'
  const isPending = status === 'pending'
  const isPaid = status === 'paid'

  return (
    <span
      className={classnames(
        'flex',
        'items-center',
        'justify-center',
        'gap-3',
        'rounded-md',
        'py-2',
        'px-6',
        'font-bold',
        'capitalize',
        {
          'bg-sys-color-7/10': isPaid,
          'text-sys-color-7': isPaid,
          'bg-sys-color-9/10': isPending,
          'text-sys-color-9': isPending,
          'bg-sys-color-10/10': isDraft,
          'text-sys-color-10': isDraft,
        },
      )}
    >
      <span
        className={classnames('h-2', 'w-2', 'rounded-full', {
          'bg-sys-color-7': isPaid,
          'bg-sys-color-9': isPending,
          'bg-sys-color-10': isDraft,
        })}
      ></span>
      {status}
    </span>
  )
}

export default InvoiceStatusChip
