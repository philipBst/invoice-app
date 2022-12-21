import InvoiceInput from './InvoiceInput'

const InvoiceForm = () => {
  return (
    <section className="ml-20 w-96 bg-sys-color-1 absolute p-10 pl-14 top-0 left-0 bottom-0 rounded-tr-3xl">
      <p className="font-bold text-xl mb-8">New Invoice</p>
      <div className="space-y-8">
        <form className="space-y-4 overflow-y-auto">
          <p className="text-sm text-sys-color-3">Bill From</p>
          <InvoiceInput label="Street Address" />
          <div className="flex gap-2">
            <InvoiceInput label="City" />
            <InvoiceInput label="Post Code" />
            <InvoiceInput label="Country" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default InvoiceForm
