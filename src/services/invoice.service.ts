import invoices from '../data/invoices.json'

import type { IInvoice } from '../interfaces'

export async function getAllInvoices() {
  return invoices as IInvoice[]
}
