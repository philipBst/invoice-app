import { IconSun } from './icons'

const Sidebar = () => (
  <aside className="absolute left-0 top-0 bottom-0 w-24 overflow-hidden rounded-tr-3xl rounded-br-3xl bg-sys-color-2">
    <div className="bg-sys-color-3 flex h-24 w-full items-center justify-center rounded-br-3xl">
      <span className="h-12 w-12 rounded-full bg-white"></span>
    </div>
    <div className="divide-sys-color-4 absolute bottom-0 z-10 w-full divide-y-2">
      <section className="flex items-center justify-center py-6">
        <IconSun />
      </section>
      <section className="flex items-center justify-center py-6">
        {/* This img url should come from props */}
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="user image"
          className="h-10 w-10 rounded-full"
        />
      </section>
    </div>
  </aside>
)

export default Sidebar
