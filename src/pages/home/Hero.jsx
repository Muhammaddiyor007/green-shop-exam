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
      <h2 className="text-[24px] md:text-[48px] lg:text-[70px] leading-[30px] md:leading-[50px] lg:leading-[70px] uppercase text-[#3D3D3D] tracking-[0%] mb-4 font-black bg-[#ffffff42] md:bg-transparent">
        {words.join(" ")} <span className="text-green-600">{lastWord}</span>
      </h2>
    );
  };

  return (
    <div className="container max-w-[1200px] mx-auto bg-[#F5F5F580] h-auto md:h-[450px] my-[12px] relative">
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
        className="mySwiper h-full"
      >
        {heroSlider.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full px-4 md:px-10 font-inter gap-6 md:gap-0 py-6 md:py-0">
              <div className="w-full md:w-1/2 max-w-[600px] relative z-50 text-center md:text-left">
                <p className="text-[#564545] text-[11px] md:text-[14px] uppercase tracking-[10%] leading-[16px] font-medium mb-2 bg-white md:bg-transparent w-fit inline-block">
                  {slide.greetings}
                </p>
                {renderTitle(slide.title)}
                <p className="text-[#727272] text-[14px] leading-[24px] font-normal w-fit md:w-full inline-block md:bg-transparent bg-[#ffffff5f] mb-4">
                  {slide.content}
                </p>
                <button className="btn bg-[#46A358] text-white mt-2">
                  Shop now
                </button>
              </div>

              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                  src={heroImg}
                  alt="plant"
                  className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] object-contain"
                />
              </div>
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

      <div className="custom-pagination mt-4 flex justify-center gap-2 absolute bottom-[17px] left-0 right-0 z-[40]" />
    </div>
  );
};

export default Hero;
