import { useEffect } from 'react'
import { getInvoices, useInvoice } from '../contexts/InvoiceContext'

const InvoicesPage = () => {
  const { invoices, dispatch } = useInvoice()
  console.log(invoices)
  useEffect(() => {
    getInvoices(dispatch)
  }, [dispatch])
  return <>invoices</>
}

export default InvoicesPage
