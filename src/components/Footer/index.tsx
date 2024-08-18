
import logo from '../../assets/images/logo-xl.png'
import FaceBook from '../../assets/icons/facebook.png'
import Instagram from '../../assets/icons/instagram.png'
import Twitter from '../../assets/icons/twitter_black.png'

function Footer() {
  const menu = ["Terms of service", "Privacy Policy", "Support", "Careers"];
  return (
    <footer className='w-10/12 max-w-container mx-auto mt-[100px]'>
      <div className="flex flex-row-reverse items-center justify-between w-full lg:block">
        <div className='flex  flex-col lg:flex-row  justify-between items-center text-[14px] text-[#232323] py-5  lg:mx-auto leading-[22px]'>
          <div className="logo">
            <img src={logo} alt="logo" /></div>

          <div className="flex gap-6 items-center mt-4 lg:mt-0">
            <img src={FaceBook} alt="facebook" className='cursor-pointer w-[32px] h-[32px] lg:w-[43px] lg:h-[43px]' />
            <img src={Instagram} alt="instagram" className='cursor-pointer w-[32px] h-[32px] lg:w-[43px] lg:h-[43px]' />
            <img src={Twitter} alt="twitter" className='cursor-pointer w-[32px] h-[32px] lg:w-[43px] lg:h-[43px]' />

          </div>
        </div>
        <hr className='border-[#DDDDDD] hidden lg:block' />
        <div className='flex   lg:justify-between lg:items-center text-[14px] text-[#232323] lg:py-5  lg:mx-auto leading-[22px]'>

          <ul className='flex flex-col lg:flex-row  lg:gap-[30px]'>
            {menu.map((item, index) => (
              <li key={index} className='pt-2 lg:p-2 hover-effect cursor-pointer transition-all'>{item}</li>
            ))}
          </ul>
          <div className="lg:flex gap-[30px] items-center hidden">
            <p>Copyright © 2023 Mandarin. All rights reserved.</p>
          </div>
        </div>
      </div>

      <p className='text-sm lg:hidden mt-5'>Copyright © 2023 Mandarin. All rights reserved.</p>
    </footer>
    // <div>Footer</div>
  )
}

export default Footer