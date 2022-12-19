import { useEffect } from 'react'
import { getInvoices, useInvoice } from '../contexts/InvoiceContext'

import { Invoicebar } from '../components'

const InvoicesPage = () => {
  const { invoices, dispatch } = useInvoice()

  useEffect(() => {
    getInvoices(dispatch)
  }, [dispatch])

  return (
    <main className="flex items-center justify-center w-full">
      <section className="m-10 space-y-10">
        <div className="flex w-full items-center justify-between gap-x-56">
          <aside>
            <h1 className="text-2xl">Invoices</h1>
            <span className="text-sys-color-5">There are 7 total invoices</span>
          </aside>
          <aside className="flex items-center justify-between gap-8">
            <select
              name="filter-select"
              id="filter-select"
              defaultValue="all"
              className="bg-sys-color-1 pr-2"
            >
              <option value="all">Filter by status</option>
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
            </select>
            <button className="bg-sys-color-3 flex items-center justify-center gap-4 rounded-full p-2 pr-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                    fill="#7C5DFA"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
              <span className="text-sm font-bold">New Invoice</span>
            </button>
          </aside>
        </div>
        <ul className="w-full space-y-4">
          {invoices.map(invoice => (
            <Invoicebar key={invoice.id} {...invoice} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default InvoicesPage
