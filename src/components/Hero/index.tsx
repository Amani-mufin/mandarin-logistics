import Slider from "react-slick";
import Map from "../../assets/images/map.png"
import TNT from "../../assets/images/TNT.png"
import UPS from "../../assets/images/UPS.png"
import DHL from "../../assets/images/DHL.png"
import FedEx from "../../assets/images/FedEx.png"


function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  const slideImg = [TNT, UPS, DHL, FedEx, TNT, UPS, DHL, FedEx];
  return (
    <div className="">
      <div className='w-10/12 max-w-container flex mx-auto items-center justify-center mt-[20px]'>
        <div className="w-full lg:w-7/12 ">
          <h1 className="">Fastest <span className="text-primary font-bold">Parcel  <br />
            Delivery </span> & Easy Pickup</h1>
          <p className="text-[16px] font-normal text-[#232323]">Experience Hassle-Free Parcel Deliveries That Keep You Connected to What Matters Most</p>
          <form action="" className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-4">
            <input type="text" className=" border-1 border h-[46px] px-3 outline-none border-[#9B9B9B] w-full lg:w-[60%] rounded-[4px] bg-[#FBFBFB]" placeholder='Enter Tracking Number' />

            <button className="bg-primary text-white p-2 rounded px-[40px] py-[12px] hover:opacity-70">Track Parcel</button>
          </form>
        </div>
        <div className="w-5/12 hidden lg:block">
          <img src={Map} alt="map" />
        </div>
      </div>
      <div className="lg:text-center  mt-[50px]">
        <p className="text-[#232323] mb-[20px] max-w-container mx-auto w-10/12 lg:ml-0">OUR LOGISTICS PARTNERS</p>
        <div className="bg-[#fef7f9]">
          {/* <div className="slider-container"> */}
          <Slider {...settings} className="">
            {
              slideImg.map((img, index) => <div key={index} className="!flex items-center h-[100px]">
                <div className="">
                  <img src={img} alt="img" className="" />
                </div>
              </div>)
            }
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero