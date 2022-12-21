const InvoiceForm = () => {
  return (
    <section className="ml-20 w-96 bg-sys-color-1 absolute p-10 pl-14 top-0 left-0 bottom-0 rounded-tr-3xl">
      <p className="font-bold text-xl mb-8">New Invoice</p>
      <div className="space-y-8">
        <form className="space-y-4 overflow-y-auto">
          <p className="text-sm text-sys-color-3">Bill From</p>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-xs text-sys-color-16">
              Street Address
            </label>
            <input
              type="text"
              className="border border-sys-color-12 w-full outline-none bg-sys-color-2 rounded-sm px-2 py-1 text-white"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-xs text-sys-color-16">
                Street Address
              </label>
              <input
                type="text"
                className="w-full outline-none bg-sys-color-2 rounded-sm px-2 py-1 text-white"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-xs text-sys-color-16">
                Street Address
              </label>
              <input
                type="text"
                className="w-full outline-none bg-sys-color-2 rounded-sm px-2 py-1 text-white"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-xs text-sys-color-16">
                Street Address
              </label>
              <input
                type="text"
                className="w-full outline-none bg-sys-color-2 rounded-sm px-2 py-1 text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default InvoiceForm
