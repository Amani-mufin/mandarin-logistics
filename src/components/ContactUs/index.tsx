import Phone from "../../assets/images/phone.png"
import GooglePlay from "../../assets/images/google_play.png"
import AppStore from "../../assets/images/app_store.png"



function ContactUs() {
  return (
    <div className="">
      <div className='lg:text-center mt-[100px] w-10/12 mx-auto max-w-container'>
        <p className='text-[#9B9B9B] font-normal text-[14px] leading-[22px]'>BUSINESS SOLUTIONS</p>
        <h2 className='font-bold text-[40px] leading-[50px]'>Enjoy our <span className='text-primary font-bold'> premium delivery</span> service</h2>
        <p>As a business owner, you can partner with us to enjoy our premium delivery service</p>
        <button className="bg-primary text-white p-2 w-[240px] text-[14px] rounded px-[40px] py-[14px] hover:opacity-70 mt-3 ">Contact Us</button>
      </div>
      <div className="flex justify-center bg-[#111111] lg:rounded-[16px] pb-[20px] lg:pb-0 pt-[30px] text-white mt-[100px] px-10 lg:px-0 w-full lg:w-10/12 max-w-container mx-auto">
        <div className="w-full lg:w-7/12">
          <h2 className=''>Get 20% discount when you book a delivery using our Mobile App</h2>
          <p className='mt-2'>Our App is available to download and you get 20% off for the first time use.</p>
          <div className="flex gap-3 mt-8">
            <img src={GooglePlay} alt="google play store" />
            <img src={AppStore} alt="app store" />
          </div>
        </div>
        <img src={Phone} alt="phone" className='hidden lg:3/12 lg:block' />
      </div>
    </div>
  )
}

export default ContactUs