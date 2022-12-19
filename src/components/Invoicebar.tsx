import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { ArrowRightIcon } from './icons'

import type { IInvoice } from '../interfaces'
import InvoiceStatusChip from './InvoiceStatusChip'
import { useCallback } from 'react'

const Invoicebar: React.FC<IInvoice> = ({
  id,
  paymentDue,
  clientName,
  total,
  status,
}) => {
  const navigate = useNavigate()

  const goToInvoiceDetailPage = useCallback(() => {
    navigate(`/invoices/${id}`)
  }, [navigate])

  return (
    <li className="table-row w-full bg-sys-color-2">
      <span className="table-cell py-4 px-6 rounded-tl-md rounded-bl-md">
        <span className="text-sys-color-6">#</span>
        {id}
      </span>
      <span className="table-cell py-4 px-6 text-sys-color-5">
        Due {format(new Date(paymentDue), 'dd MMM yyyy')}
      </span>
      <span className="table-cell py-4 px-6">{clientName}</span>
      <span className="table-cell py-4 px-6 text-lg font-bold text-right">
        £{total.toFixed(2)}
      </span>
      <span className="table-cell py-4 px-6">
        <InvoiceStatusChip status={status} />
      </span>
      <span
        className="table-cell py-4 px-6 rounded-tr-md rounded-br-md cursor-pointer"
        onClick={goToInvoiceDetailPage}
      >
        <ArrowRightIcon />
      </span>
    </li>
  )
}

export default Invoicebar
