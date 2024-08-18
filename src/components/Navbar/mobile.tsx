import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import CloseIcon from '../../assets/icons/close-circle.png'

type IProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileDrawer({ open, setOpen }: IProps) {
  const menu = ["Why Mandarin?", "Services", "Tracking", "Pricing"];

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#111111] opacity-55 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl px-5">
                <div className="px-4 sm:px-6">
                  <div className="flex items-center justify-between mt-11">
                    <DialogTitle className="text-base font-semibold leading-6 text-[#232323]">Menu</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <img src={CloseIcon} alt="close" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <ul className='flex flex-col gap-[30px] mt-[30px]'>
                    {menu.map((item, index) => (
                      <li key={index} className=' hover-effect cursor-pointer transition-all'>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-[30px] items-start mt-14">
                    <div className="">Login</div>
                    <button className='bg-primary text-white p-2 rounded px-[60px] py-[12px]'>Sign Up</button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
