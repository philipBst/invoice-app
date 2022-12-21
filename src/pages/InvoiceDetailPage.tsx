import { format } from 'date-fns'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  DeletePromptDialog,
  InvoiceForm,
  InvoiceStatusChip,
  SlideRight,
} from '../components'
import { ArrowLeftIcon, NothingHereIllustration } from '../components/icons'
import { getInvoiceByID, useInvoice } from '../contexts/InvoiceContext'
import { deleteInvoice } from '../services/invoice.service'
import { isEmptyArray } from '../utils/array-utils'

const InvoiceDetailPage = () => {
  const { invoiceId } = useParams()
  const navigate = useNavigate()
  const [shouldOpenInvoiceForm, setOpenInvoiceForm] = useState(false)
  const { invoices, dispatch } = useInvoice()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const openPropmptDialog = () => {
    dialogRef.current?.showModal()
  }

  useEffect(() => {
    if (invoiceId) getInvoiceByID(invoiceId, dispatch)
  }, [dispatch, invoiceId])

  const goToInvoicesPage = useCallback(() => {
    navigate('/invoices')
  }, [navigate])

  const deleteInvoiceById = useCallback(async () => {
    if (invoiceId) await deleteInvoice(invoiceId)
    navigate('/invoices')
  }, [])

  const openInvoiceForm = useCallback(() => setOpenInvoiceForm(true), [])

  const closeInvoiceForm = useCallback(() => setOpenInvoiceForm(false), [])

  return (
    <main className="flex min-h-screen w-full justify-center bg-sys-color-1 text-white pb-8">
      <section className="mt-10 space-y-6">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={goToInvoicesPage}
        >
          <ArrowLeftIcon />
          <span>Go back</span>
        </div>
        {isEmptyArray(invoices) ? (
          <div className="p-32 text-center space-y-8">
            <NothingHereIllustration />
            <p className="text-2xl">Nothing here</p>
          </div>
        ) : (
          <>
            <div className="bg-sys-color-11 flex items-center gap-52 rounded-md py-4 px-6">
              <section className="flex items-center gap-4">
                <span>Status</span>
                <InvoiceStatusChip status={invoices[0]!.status} />
              </section>
              <section className="flex items-center gap-4">
                <button
                  className="bg-sys-color-12 rounded-full py-3 px-5"
                  onClick={openInvoiceForm}
                >
                  Edit
                </button>
                <button
                  className="bg-sys-color-13 rounded-full py-3 px-5"
                  onClick={openPropmptDialog}
                >
                  Delete
                </button>
                <button className="rounded-full bg-sys-color-3 py-3 px-5">
                  Mark as Paid
                </button>
              </section>
            </div>
            <div className="bg-sys-color-11 rounded-md py-8 px-10 space-y-8">
              <section className="flex justify-between">
                <div className="space-y-1">
                  <span className="flex gap-0 text-lg font-bold">
                    <span className="text-sys-color-6">#</span>
                    <span>{invoices[0]!.id}</span>
                  </span>
                  <p className="text-sys-color-14 text-sm">
                    {invoices[0]!.description}
                  </p>
                </div>
                <div>
                  <p className="text-sys-color-14 text-right text-sm">
                    {invoices[0]!.senderAddress.street}
                  </p>
                  <p className="text-sys-color-14 text-right text-sm">
                    {invoices[0]!.senderAddress.city}
                  </p>
                  <p className="text-sys-color-14 text-right text-sm">
                    {invoices[0]!.senderAddress.postCode}
                  </p>
                  <p className="text-sys-color-14 text-right text-sm">
                    {invoices[0]!.senderAddress.country}
                  </p>
                </div>
              </section>
              <section className="flex gap-x-20">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-sys-color-14 text-sm">Invoice Date</p>
                    <p className="text-lg font-semibold">
                      {format(new Date(invoices[0]!.createdAt), 'dd MMM yyy')}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sys-color-14 text-sm">Payment Due</p>
                    <p className="text-lg font-semibold">
                      {format(new Date(invoices[0]!.paymentDue), 'dd MMM yyy')}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-1 space-y-1">
                    <p className="text-sys-color-14 text-sm">Bill To</p>
                    <p className="text-lg font-semibold">
                      {invoices[0]!.clientName}
                    </p>
                  </div>
                  <p className="text-sys-color-14 text-sm">
                    {invoices[0]!.clientAddress.street}
                  </p>
                  <p className="text-sys-color-14 text-sm">
                    {invoices[0]!.clientAddress.city}
                  </p>
                  <p className="text-sys-color-14 text-sm">
                    {invoices[0]!.clientAddress.postCode}
                  </p>
                  <p className="text-sys-color-14 text-sm">
                    {invoices[0]!.clientAddress.country}
                  </p>
                </div>
                <div className="mb-1 space-y-1">
                  <p className="text-sys-color-14 text-sm">Sent To</p>
                  <p className="text-lg font-semibold">
                    {invoices[0]!.clientEmail}
                  </p>
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
                    {invoices[0]!.items.map(item => (
                      <tr key={item.name}>
                        <td>{item.name}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-right">
                          £ {item.price.toFixed(2)}
                        </td>
                        <td className="text-right">
                          £ {item.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="w-full bg-sys-color-15 py-6 px-9 flex justify-between items-center mt-2">
                  <p className="text-sm">Amount Due</p>
                  <p className="font-bold text-2xl">
                    £{' '}
                    {invoices[0]!.items
                      .reduce((total, item) => (total += item.total), 0)
                      .toFixed(2)}
                  </p>
                </div>
              </section>
            </div>
          </>
        )}
      </section>
      <DeletePromptDialog
        ref={dialogRef}
        invoiceId={isEmptyArray(invoices) ? '' : invoices[0]!.id}
        onDelete={deleteInvoiceById}
      />
      <SlideRight open={shouldOpenInvoiceForm} onClose={closeInvoiceForm}>
        <InvoiceForm
          action="edit"
          invoiceId={isEmptyArray(invoices) ? '' : invoices[0]!.id}
          onCancel={closeInvoiceForm}
        />
      </SlideRight>
    </main>
  )
}

export default InvoiceDetailPage
