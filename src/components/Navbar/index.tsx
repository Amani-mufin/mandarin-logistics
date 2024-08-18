import logo from '../../assets/images/logo-xl.png'

function Navbar() {
  const menu = ["Why Mandarin?", "Services", "Tracking", "Pricing"];
  return (
    <nav className='flex max-w-container w-10/12 justify-between items-center text-[14px] text-[#232323] py-5  mx-auto leading-[22px]'>
      <div className="logo">
        <img src={logo} alt="logo" /></div>
      <ul className='flex gap-[30px]'>
        {menu.map((item, index) => (
          <li key={index} className='p-2 hover-effect cursor-pointer transition-all'>{item}</li>
        ))}
      </ul>
      <div className="flex gap-[30px] items-center">
        <div className="">Login</div>
        <button className='bg-primary text-white p-2 rounded px-[40px] py-[12px]'>Sign Up</button>
      </div>
    </nav>
    // <div>Navbar</div>
  )
}

export default Navbar