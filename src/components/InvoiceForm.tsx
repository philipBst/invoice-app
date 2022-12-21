import { useForm } from 'react-hook-form'

import InvoiceInput from './InvoiceInput'

import type { IInvoice } from '../interfaces'

export type InvoiceFormProps = {
  action: 'new' | 'edit'
  invoiceId?: string
  invoice?: IInvoice | undefined
  onSaveAsDraft?: (invoice: IInvoice) => void
  onCancel?: () => void
  onSave?: (invoice: IInvoice) => void
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({
  action,
  invoiceId,
  onSaveAsDraft,
  onCancel,
  onSave,
  invoice = {},
}) => {
  const { register, handleSubmit, getValues } = useForm<IInvoice>({
    defaultValues: {
      total: 0,
      items: [],
      createdAt: new Date().toISOString(),
      paymentDue: new Date().toISOString(),
      ...invoice,
    },
  })
  return (
    <section className="ml-20 w-[30rem] space-y-6 bg-sys-color-1 absolute p-10 pr-4 pt-8 pl-14 top-0 left-0 bottom-0 rounded-tr-3xl">
      <p className="font-bold text-xl">
        {action === 'new' ? 'New Invoice' : `Edit #${invoiceId || ''}`}
      </p>
      <div className="space-y-6 h-[calc(100vh-11rem)] pr-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-sys-color-12 scrollbar-track-transparent">
        <div className="space-y-4">
          <p className="text-sm text-sys-color-3">Bill From</p>
          <InvoiceInput
            label="Street Address"
            {...register('senderAddress.street', { required: true })}
          />
          <div className="flex gap-2">
            <InvoiceInput
              label="City"
              {...register('senderAddress.city', { required: true })}
            />
            <InvoiceInput
              label="Post Code"
              {...register('senderAddress.postCode', { required: true })}
            />
            <InvoiceInput
              label="Country"
              {...register('senderAddress.country', { required: true })}
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-sys-color-3">Bill To</p>
          <InvoiceInput
            label="Client's name"
            {...register('clientName', { required: true })}
          />
          <InvoiceInput
            label="Client's email"
            {...register('clientEmail', { required: true })}
          />
          <InvoiceInput
            label="Street Address"
            {...register('clientAddress.street', { required: true })}
          />
          <div className="flex gap-2">
            <InvoiceInput
              label="City"
              {...register('clientAddress.city', { required: true })}
            />
            <InvoiceInput
              label="Post Code"
              {...register('clientAddress.postCode', { required: true })}
            />
            <InvoiceInput
              label="Country"
              {...register('clientAddress.country', { required: true })}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <InvoiceInput
              label="Invoice Date"
              type="date"
              {...register('createdAt', { required: true })}
            />
            <InvoiceInput
              label="Payment Terms"
              {...register('paymentTerms', { required: false })}
            />
          </div>
          <InvoiceInput
            label="Project Description"
            {...register('description', { required: true })}
          />
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
      </div>
      <div className="flex items-center justify-between bg-sys-color-1 w-full text-sm">
        {action === 'new' ? (
          <button
            className="rounded-full bg-sys-color-8 text-sys-color-3 py-3 px-5"
            onClick={onCancel}
          >
            Discard
          </button>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-4">
          <button
            className="rounded-full bg-sys-color-17 text-sys-color-10 py-3 px-5"
            onClick={() => {
              const invoice = getValues()
              if (action === 'new') onSaveAsDraft?.(invoice)
              else onCancel?.()
            }}
          >
            {action === 'new' ? 'Save as Draft' : 'Cancel'}
          </button>
          <button
            className="rounded-full bg-sys-color-3 text-white py-3 px-5"
            onClick={handleSubmit(invoice => {
              onSave?.(invoice)
            })}
          >
            {action === 'new' ? 'Save & Send' : 'Save Changes'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default InvoiceForm
