import { format } from 'date-fns'

import type { IInvoice } from '../interfaces'

const InvoiceInfo: React.FC<IInvoice> = invoice => (
  <div className="bg-sys-color-11 rounded-md py-8 px-10 space-y-8">
    <section className="flex justify-between">
      <div className="space-y-1">
        <span className="flex gap-0 text-lg font-bold">
          <span className="text-sys-color-6">#</span>
          <span>{invoice.id}</span>
        </span>
        <p className="text-sys-color-14 text-sm">{invoice.description}</p>
      </div>
      <div>
        <p className="text-sys-color-14 text-right text-sm">
          {invoice.senderAddress.street}
        </p>
        <p className="text-sys-color-14 text-right text-sm">
          {invoice.senderAddress.city}
        </p>
        <p className="text-sys-color-14 text-right text-sm">
          {invoice.senderAddress.postCode}
        </p>
        <p className="text-sys-color-14 text-right text-sm">
          {invoice.senderAddress.country}
        </p>
      </div>
    </section>
    <section className="flex gap-x-20">
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-sys-color-14 text-sm">Invoice Date</p>
          <p className="text-lg font-semibold">
            {format(new Date(invoice.createdAt), 'dd MMM yyy')}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sys-color-14 text-sm">Payment Due</p>
          <p className="text-lg font-semibold">
            {format(new Date(invoice.paymentDue), 'dd MMM yyy')}
          </p>
        </div>
      </div>
      <div>
        <div className="mb-1 space-y-1">
          <p className="text-sys-color-14 text-sm">Bill To</p>
          <p className="text-lg font-semibold">{invoice.clientName}</p>
        </div>
        <p className="text-sys-color-14 text-sm">
          {invoice.clientAddress.street}
        </p>
        <p className="text-sys-color-14 text-sm">
          {invoice.clientAddress.city}
        </p>
        <p className="text-sys-color-14 text-sm">
          {invoice.clientAddress.postCode}
        </p>
        <p className="text-sys-color-14 text-sm">
          {invoice.clientAddress.country}
        </p>
      </div>
      <div className="mb-1 space-y-1">
        <p className="text-sys-color-14 text-sm">Sent To</p>
        <p className="text-lg font-semibold">{invoice.clientEmail}</p>
      </div>
    </section>
    <section className="pt-4 rounded-md bg-sys-color-12 overflow-hidden">
      <table className="w-full border-separate border-spacing-4 px-4">
        <thead className="text-sys-color-14 text-sm">
          <tr>
            <td>Item Name</td>
            <td className="text-center">QTY.</td>
            <td className="text-right">Price</td>
            <td className="text-right">Total</td>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-right">£ {item.price.toFixed(2)}</td>
              <td className="text-right">£ {item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full bg-sys-color-15 py-6 px-9 flex justify-between items-center mt-2">
        <p className="text-sm">Amount Due</p>
        <p className="font-bold text-2xl">
          £{' '}
          {invoice.items
            .reduce((total, item) => (total += item.total), 0)
            .toFixed(2)}
        </p>
      </div>
    </section>
  </div>
)

export default InvoiceInfo
