import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlider } from "../../statick";
import heroImg from "../../assets/heroImg.svg";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, timeLeft) => {
    const totalTime = swiper.params.autoplay.delay;
    const elapsed = totalTime - timeLeft;
    progressCircle.current.style.setProperty("--progress", elapsed / totalTime);
    const seconds = Math.floor(elapsed / 1000) + 1;
    progressContent.current.textContent = `${seconds}s`;
  };

  const renderTitle = (title) => {
    const words = title.split(" ");
    const lastWord = words.pop();

    return (
      <h2 className="md:text-[70px] text-[24px] leading-[29xp] uppercase md:leading-[70px] text-[#3D3D3D] tracking-[0%] mb-4 font-black bg-[#ffffff42] md:bg-transparent">
        {words.join(" ")} <span className="text-green-600">{lastWord}</span>
      </h2>
    );
  };

  return (
    <div className="container max-w-[1200px] mx-auto bg-[#F5F5F580] h-[450px] my-[12px] relative ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-full "
      >
        {heroSlider.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center justify-between h-full px-10 font-inter ">
              <div className="max-w-[600px] relative z-50">
                <p className="text-[#564545] text-[11px] md:text-[14px] uppercase tracking-[10%] leading-[16px] font-medium mb-2 bg-white md:bg-transparent w-fit inline-block ">
                  {slide.greetings}
                </p>
                {renderTitle(slide.title)}
                <p className="text-[#727272] text-[14px] leading-[24px] md:bg-transparent bg-[#ffffff5f] font-normal w-fit inline-block md:w-full">
                  {slide.content}
                </p>
                <button className="btn bg-[#46A358] text-white">
                  Shop now
                </button>
              </div>
              <img
                src={heroImg}
                alt="plant"
                // className='h-[350px] object-contain absolute md:static right-[-95px] z-10'
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress absolute bottom-4 right-4 z-10 flex flex-col items-center">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-10 h-10">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#4caf50"
              strokeWidth="4"
            ></circle>
          </svg>
          <span
            ref={progressContent}
            className="text-sm text-green-700 mt-1"
          ></span>
        </div>
      </Swiper>
      <div className="custom-pagination mt-4 flex justify-center gap-2 absolute bottom-[17px]  z-[40] " />
    </div>
  );
  //
};

export default Hero;