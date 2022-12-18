const Invoicebar = () => (
  <li className="flex w-full items-center justify-between rounded-md bg-sys-color-2 py-4 px-5">
    <span className="flex gap-0">
      <span className="text-sys-color-6">#</span>
      <span>RT3080</span>
    </span>
    <span className="text-sys-color-5">Due 19 Aug 2019</span>
    <span>Jensen Huang</span>
    <span className="text-lg font-bold">$1,900.00</span>
    <span className="text-sys-color-7 bg-sys-color-7/10 flex items-center justify-center gap-3 rounded-md py-2 px-6 font-bold">
      <span className="bg-sys-color-7 h-2 w-2 rounded-full"></span>
      Paid
    </span>
    <span>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </span>
  </li>
)

export default Invoicebar
