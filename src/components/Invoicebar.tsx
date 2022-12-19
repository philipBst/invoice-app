import { format } from 'date-fns'
import { ArrowRightIcon } from './icons'

import type { IInvoice } from '../interfaces'
import InvoiceStatusChip from './InvoiceStatusChip'

const Invoicebar: React.FC<IInvoice> = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}) => (
  <li className="flex w-full items-center justify-between rounded-md bg-sys-color-2 py-4 px-5">
    <span className="flex gap-0">
      <span className="text-sys-color-6">#</span>
      <span>{id}</span>
    </span>
    <span className="text-sys-color-5">
      Due {format(new Date(paymentDue), 'dd MMM yyyy')}
    </span>
    <span>{clientName}</span>
    <span className="text-lg font-bold">£{total}</span>
    <InvoiceStatusChip status={status} />
    <span>
      <ArrowRightIcon />
    </span>
  </li>
)

export default Invoicebar
