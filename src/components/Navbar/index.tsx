import { useState } from 'react';
import logo from '../../assets/images/logo-xl.png'
import Menu from '../../assets/icons/menumenu.png'
import MobileDrawer from './mobile';
import { menuURLAndLink } from '../../utils';

function Navbar() {

  const [open, setOpen] = useState(false)

  return (

    <nav className=' bg-white z-50 fixed top-0 left-0 right-0 lg:relative '>
      <div className='flex  max-w-container w-10/12 justify-between items-center text-[14px] text-[#232323] py-5  mx-auto leading-[22px]'>
        <div className="logo">
          <img src={logo} alt="logo" /></div>
        <ul className='lg:flex gap-[30px] hidden'>
          {menuURLAndLink.map((item, index) => (
            <li key={index} className='p-2 hover-effect cursor-pointer transition-all'><a href={item.url}>{item.name}</a></li>
          ))}
        </ul>
        <div className="lg:flex gap-[30px] items-center hidden">
          <div className="cursor-pointer">Login</div>
          <button className='bg-primary hover:opacity-90 text-white p-2 rounded px-[40px] py-[12px]'>Sign Up</button>
        </div>

        <img src={Menu} alt="menu" className='lg:hidden' onClick={() => setOpen(!open)} />
        <MobileDrawer open={open} setOpen={setOpen} />
      </div>
    </nav>
  )
}

export default Navbar