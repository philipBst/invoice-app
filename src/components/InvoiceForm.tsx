import InvoiceInput from './InvoiceInput'

import type { IInvoice } from '../interfaces'

export type InvoiceFormProps = {
  action: 'new' | 'edit'
  invoiceId?: string
  invoice?: IInvoice
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ action, invoiceId }) => {
  return (
    <section className="ml-20 w-[30rem] space-y-6 bg-sys-color-1 absolute p-10 pr-4 pt-8 pl-14 top-0 left-0 bottom-0 rounded-tr-3xl">
      <p className="font-bold text-xl">
        {action === 'new' ? 'New Invoice' : `Edit #${invoiceId || ''}`}
      </p>
      <form className="space-y-6 h-[calc(100vh-11rem)] pr-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-sys-color-12 scrollbar-track-transparent">
        <div className="space-y-4">
          <p className="text-sm text-sys-color-3">Bill From</p>
          <InvoiceInput label="Street Address" />
          <div className="flex gap-2">
            <InvoiceInput label="City" />
            <InvoiceInput label="Post Code" />
            <InvoiceInput label="Country" />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-sys-color-3">Bill To</p>
          <InvoiceInput label="Client's name" />
          <InvoiceInput label="Client's email" />
          <InvoiceInput label="Street Address" />
          <div className="flex gap-2">
            <InvoiceInput label="City" />
            <InvoiceInput label="Post Code" />
            <InvoiceInput label="Country" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <InvoiceInput label="Invoice Date" type="date" />
            <InvoiceInput label="Payment Terms" />
          </div>
          <InvoiceInput label="Project Description" />
        </div>
        <div className="space-y-4">
          <p className="text-sm text-sys-color-16">Item List</p>
          <table className="w-full">
            <thead className="w-full">
              <tr>
                <td>Item Name</td>
                <td>Qty.</td>
                <td>Price</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <button className="bg-sys-color-2 w-full rounded-full">
            + Add New Item
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between bg-sys-color-1 w-full text-sm">
        {action === 'new' ? (
          <button className="rounded-full bg-sys-color-8 text-sys-color-3 py-3 px-5">
            Discard
          </button>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-sys-color-17 text-sys-color-10 py-3 px-5">
            {action === 'new' ? 'Save as Draft' : 'Cancel'}
          </button>
          <button className="rounded-full bg-sys-color-3 text-white py-3 px-5">
            {action === 'new' ? 'Save & Send' : 'Save Changes'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default InvoiceForm
