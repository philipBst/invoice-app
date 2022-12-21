import type { TOption } from '../components/Select'

export const invoiceOptions: TOption[] = [
  {
    value: 'all',
    label: 'Filter by status',
  },
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'draft',
    label: 'Draft',
  },
  {
    value: 'pending',
    label: 'Pending',
  },
  {
    value: 'paid',
    label: 'Paid',
  },
]
