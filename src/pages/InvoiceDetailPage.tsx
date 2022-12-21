import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import {
  DeletePromptDialog,
  InvoiceForm,
  InvoiceInfo,
  InvoiceStatusChip,
  SlideRight,
} from '../components'
import { ArrowLeftIcon, NothingHereIllustration } from '../components/icons'
import { editInvoice, useInvoice } from '../contexts/InvoiceContext'
import type { IInvoice } from '../interfaces'
import {
  deleteInvoice,
  getInvoiceById,
  markInvoiceAsPaid,
} from '../services/invoice.service'

const InvoiceDetailPage = () => {
  const [invoice, setInvoice] = useState<IInvoice>()
  const { invoiceId } = useParams()
  const navigate = useNavigate()
  const [shouldOpenInvoiceForm, setOpenInvoiceForm] = useState(false)
  const { dispatch } = useInvoice()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const openPropmptDialog = () => {
    dialogRef.current?.showModal()
  }

  useEffect(() => {
    if (invoiceId) {
      ;(async () => {
        const invoice = await getInvoiceById(invoiceId)
        setInvoice(invoice)
      })()
    }
  }, [invoiceId])

  const goToInvoicesPage = useCallback(() => {
    navigate('/invoices')
  }, [navigate])

  const deleteInvoiceById = useCallback(async () => {
    if (invoiceId) await deleteInvoice(invoiceId)
    navigate('/invoices')
  }, [])

  const openInvoiceForm = useCallback(() => setOpenInvoiceForm(true), [])

  const closeInvoiceForm = useCallback(() => setOpenInvoiceForm(false), [])

  const onSaveChanges = useCallback(
    (invoice: IInvoice) => {
      editInvoice(invoice, dispatch)
      setInvoice(invoice)
      closeInvoiceForm()
    },
    [dispatch],
  )

  const markAsPaid = useCallback(() => {
    if (invoiceId) markInvoiceAsPaid(invoiceId)
    setInvoice(state => ({ ...state!, status: 'paid' }))
  }, [])

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
        {invoice ? (
          <>
            <div className="bg-sys-color-11 flex items-center gap-52 rounded-md py-4 px-6">
              <section className="flex items-center gap-4">
                <span>Status</span>
                <InvoiceStatusChip status={invoice.status} />
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
                <button
                  className="rounded-full bg-sys-color-3 py-3 px-5 disabled:cursor-not-allowed"
                  disabled={invoice.status !== 'pending'}
                  onClick={markAsPaid}
                >
                  Mark as Paid
                </button>
              </section>
            </div>
            <InvoiceInfo {...invoice} />
          </>
        ) : (
          <div className="p-32 text-center space-y-8">
            <NothingHereIllustration />
            <p className="text-2xl">Nothing here</p>
          </div>
        )}
      </section>
      <DeletePromptDialog
        ref={dialogRef}
        invoiceId={invoice?.id || ''}
        onDelete={deleteInvoiceById}
      />
      <SlideRight open={shouldOpenInvoiceForm} onClose={closeInvoiceForm}>
        {invoice && (
          <InvoiceForm
            action="edit"
            invoiceId={invoice?.id || ''}
            onCancel={closeInvoiceForm}
            invoice={invoice}
            onSave={onSaveChanges}
          />
        )}
      </SlideRight>
    </main>
  )
}

export default InvoiceDetailPage
