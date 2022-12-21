import { useCallback, useEffect, useState } from 'react'
import {
  addNewDraftInvoice,
  addNewInvoice,
  getInvoices,
  getInvoicesByStatus,
  useInvoice,
} from '../contexts/InvoiceContext'

import {
  Invoicebar,
  SlideRight,
  InvoiceForm,
  IconButton,
  Box,
} from '../components'
import { PlusIcon } from '../components/icons'

import type { InvoiceStatus } from '../types'
import type { IInvoice } from '../interfaces'
import Select from '../components/Select'
import { invoiceOptions } from '../constants'

const InvoicesPage = () => {
  const [filterBy, setFilterBy] = useState<InvoiceStatus | 'all'>('all')
  const [shouldOpenInvoiceForm, setOpenInvoiceForm] = useState(false)

  const { invoices, dispatch } = useInvoice()

  useEffect(() => {
    switch (filterBy) {
      case 'all':
        getInvoices(dispatch)
        break
      case 'draft':
        getInvoicesByStatus('draft', dispatch)
        break
      case 'pending':
        getInvoicesByStatus('pending', dispatch)
        break
      case 'paid':
        getInvoicesByStatus('paid', dispatch)
        break
      default:
        getInvoices(dispatch)
    }
  }, [dispatch, filterBy])

  const changeFilter = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterBy(e.target.value as InvoiceStatus | 'all')
    },
    [],
  )

  const openInvoiceForm = useCallback(() => setOpenInvoiceForm(true), [])

  const closeInvoiceForm = useCallback(() => setOpenInvoiceForm(false), [])

  const onSave = useCallback((invoice: IInvoice) => {
    addNewInvoice(invoice, dispatch)
    closeInvoiceForm()
  }, [])

  const onSaveAsDraft = useCallback((invoice: IInvoice) => {
    addNewDraftInvoice(invoice, dispatch)
    closeInvoiceForm()
  }, [])

  return (
    <Box as="main" className="flex items-center justify-center w-full">
      <Box as="section" className="m-10 space-y-10">
        <Box className="flex w-full items-center justify-between gap-x-56">
          <Box as="aside">
            <h1 className="text-2xl">Invoices</h1>
            <span className="text-sys-color-5">
              There are {invoices.length} total invoices
            </span>
          </Box>
          <Box as="aside" className="flex items-center justify-between gap-8">
            <Select
              name="filter-select"
              id="filter-select"
              defaultValue={filterBy}
              options={invoiceOptions}
              onChange={changeFilter}
            />
            <IconButton startIcon={<PlusIcon />} onClick={openInvoiceForm}>
              New Invoice
            </IconButton>
          </Box>
        </Box>
        <ul className="w-full table border-spacing-y-4 border-separate">
          {invoices.map(invoice => (
            <Invoicebar key={invoice.id} {...invoice} />
          ))}
        </ul>
      </Box>
      <SlideRight open={shouldOpenInvoiceForm} onClose={closeInvoiceForm}>
        <InvoiceForm
          action="new"
          onCancel={closeInvoiceForm}
          onSave={onSave}
          onSaveAsDraft={onSaveAsDraft}
        />
      </SlideRight>
    </Box>
  )
}

export default InvoicesPage
