import { format } from 'date-fns'
import { ArrowRightIcon } from './icons'

import type { IInvoice } from '../interfaces'

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
    <span className="text-sys-color-7 bg-sys-color-7/10 flex items-center justify-center gap-3 rounded-md py-2 px-6 font-bold">
      <span className="bg-sys-color-7 h-2 w-2 rounded-full"></span>
      {status}
    </span>
    <span>
      <ArrowRightIcon />
    </span>
  </li>
)

export default Invoicebar
