
import Twitter from "../../assets/icons/twitter.png"
import Slider from "react-slick";
import { TestimonialData } from "../../utils";


function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className=' max-w-container mx-auto w-10/12 mt-[100px]'>
      <div className=" lg:ml-10 mb-10">
        <h1>400+</h1>
        <p className='text-primaryLight text-[14px] lg:text-[16px]'>Regular Customers</p>
        <h2>What our customers are saying</h2>
      </div>

      <Slider {...settings} className=" !flex gap-2">{
        TestimonialData.map((item, index) => (
          <div key={index} className="border border-1 cursor-pointer border-[#DDDDDD]  !w-[280px] md:!w-[320px] lg:!w-[415px] p-[16px] rounded-[16px] text-[#101828] text-[14px]  ">
            <div className="flex gap-3 text-sm leading-[20px]">
              <img src={Twitter} alt="avatar" /> Twitter
            </div>
            <p className=" text-md font-semibold mb-4 mt-2">{item.text}</p>
            <img src={item.img} alt="avatar" />
            <p className="">{item.name}</p>
            <p className=" font-normal text-[#667085]">{item.userName}</p>
          </div>))
      }
      </Slider>
    </div>
  )
}

export default Testimonial