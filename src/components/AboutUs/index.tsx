import Laptop from "../../assets/images/laptop.png"
import { cardsInformation } from "../../utils"

function AboutUs() {

  return (
    <div className='w-10/12 flex flex-col lg:flex-row mx-auto justify-center mt-10 lg:mt-[100px] items-start max-w-container' id="about">

      <div className=" w-full lg:w-5/12">
        <h2 className='lg:mr-[50px]'>
          Your <span className='text-primary'>#1</span>  Nationwide Partner in Seamless Deliveries
        </h2>
        <p className='font-normal text-[18px] leading-[26px] text-[#353535] mr-[50px]'>We provide fast and reliable delivery and pickup services for you at a very affordable rate.</p>
        <div className=" lg:ml-[40px] mt-[20px]">
          <img src={Laptop} alt="deshbord" />
        </div>
      </div>
      <div className=" mt-[80px] pr-14 lg:pr-0 lg:w-7/12 flex gap-5 flex-wrap items-center">
        {
          cardsInformation.map((card, index) => (
            <div className="border border-primary p-[32px] py-[16px]  w-full lg:w-[301px] h-[150px] rounded-[16px] " key={index}>
              <div className=" text-primary font-bold ">{card.title}</div>
              <div className="text-[#353535] text-[14px]">{card.text}</div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default AboutUs