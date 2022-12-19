const InvoiceDetailPage = () => {
  return (
    <main className="flex min-h-screen w-full justify-center bg-sys-color-1 text-white pb-8">
      <section className="mt-10 space-y-6">
        <div className="flex items-center gap-4">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span>Go back</span>
        </div>
        <div className="bg-sys-color-11 flex items-center gap-52 rounded-md py-4 px-6">
          <section className="flex items-center gap-4">
            <span>Status</span>
            <span className="flex items-center justify-center gap-3 rounded-md bg-sys-color-7/10 py-2 px-6 font-bold text-sys-color-7">
              <span className="h-2 w-2 rounded-full bg-sys-color-7"></span>Paid
            </span>
          </section>
          <section className="flex items-center gap-4">
            <button className="bg-sys-color-12 rounded-full py-3 px-5">
              Edit
            </button>
            <button className="bg-sys-color-13 rounded-full py-3 px-5">
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
                <span>RT3080</span>
              </span>
              <p className="text-sys-color-14 text-sm">Graphic Design</p>
            </div>
            <div>
              <p className="text-sys-color-14 text-right text-sm">
                19 Union Terrace
              </p>
              <p className="text-sys-color-14 text-right text-sm">London</p>
              <p className="text-sys-color-14 text-right text-sm">E1 3EZ</p>
              <p className="text-sys-color-14 text-right text-sm">
                United Kingdom
              </p>
            </div>
          </section>
          <section className="flex gap-x-20">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sys-color-14 text-sm">Invoice Date</p>
                <p className="text-lg font-semibold">21 Aug 2021</p>
              </div>
              <div className="space-y-1">
                <p className="text-sys-color-14 text-sm">Payment Due</p>
                <p className="text-lg font-semibold">21 Aug 2021</p>
              </div>
            </div>
            <div>
              <div className="mb-1 space-y-1">
                <p className="text-sys-color-14 text-sm">Bill To</p>
                <p className="text-lg font-semibold">Alex Grim</p>
              </div>
              <p className="text-sys-color-14 text-sm">84 Church Way</p>
              <p className="text-sys-color-14 text-sm">Bradford</p>
              <p className="text-sys-color-14 text-sm">BD1 9PB</p>
              <p className="text-sys-color-14 text-sm">United Kingdom</p>
            </div>
            <div className="mb-1 space-y-1">
              <p className="text-sys-color-14 text-sm">Sent To</p>
              <p className="text-lg font-semibold">alexgrim@mail.com</p>
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
                <tr>
                  <td>Item Name</td>
                  <td className="text-center">1</td>
                  <td className="text-right">Price</td>
                  <td className="text-right">Total</td>
                </tr>
                <tr>
                  <td>Item Name</td>
                  <td className="text-center">2</td>
                  <td className="text-right">Price</td>
                  <td className="text-right">Total</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full bg-sys-color-15 py-6 px-9 flex justify-between items-center mt-2">
              <p className="text-sm">Amount Due</p>
              <p className="font-bold text-2xl">$ 9837.00</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default InvoiceDetailPage
