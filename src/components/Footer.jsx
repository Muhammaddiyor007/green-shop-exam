import logo from "../assets/logo.svg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { footerDesc, footerItems } from "../statick";
import footerImg from "../assets/footerImg.svg";
import teaPot from "../assets/teapot.svg";

const Footer = () => {
  return (
    <div className="container footer px-4 md:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 pdn">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-[40px] md:gap-[62px] flex-wrap">
          <div className="flex flex-col gap-2 max-w-[200px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#46A35821] relative">
              <img
                className="w-[80px] h-[80px] absolute -top-[20px] -right-[20px]"
                src={footerImg}
                alt=""
              />
            </div>
            <p className="text-[17px] font-bold">Garden Care</p>
            <p className="text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-[200px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#46A35821] relative">
              <img
                className="w-[80px] h-[80px] absolute -top-[20px] -right-[20px]"
                src={footerImg}
                alt=""
              />
            </div>
            <p className="text-[17px] font-bold">Plant Renovation</p>
            <p className="text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-[200px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#46A35821] relative">
              <img
                className="w-[80px] h-[80px] absolute -top-[20px] -right-[20px]"
                src={teaPot}
                alt=""
              />
            </div>
            <p className="text-[17px] font-bold">Watering Garden</p>
            <p className="text-[14px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[340px] flex flex-col gap-3 mt-6 lg:mt-0">
          <p className="text-[18px] font-bold">
            Would you like to join newsletters?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <input
              className="shadow-2xl p-2 w-full sm:flex-1"
              type="text"
              placeholder="Enter your email address..."
            />
            <button className="bg-[#46A358] btn w-full sm:w-auto px-4 py-2 text-white">
              Join
            </button>
          </div>
          <p className="text-[13px] text-[#727272]">
            We usually post offers and challenges in newsletter. We’re your online houseplant
            destination. We offer a wide range of houseplants and accessories shipped directly from
            our (green)house to yours!
          </p>
        </div>
      </div>

      <div className="bg-[#46A3581A] min-h-[88px] items-center justify-between px-[23px] flex flex-col md:flex-row gap-y-[16px] gap-x-[60px] greenshop mt-6">
        <div className="logo flex items-center gap-2">
          <img src={logo} alt="logo" />
          <p className="font-extrabold text-[#46A358] text-2xl">GREENSHOP</p>
        </div>
        <p className="flex gap-[10px] font-bold items-center text-[#3D3D3D] text-[16px]">
          <LocationOnOutlinedIcon className="text-[#46A358]" />
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
        <p className="flex gap-[10px] font-bold items-center text-[#3D3D3D] text-[16px]">
          <EmailTwoToneIcon className="text-[#46A358]" />
          contact@greenshop.com
        </p>
        <p className="flex gap-[10px] font-bold items-center text-[#3D3D3D] text-[16px]">
          <LocalPhoneOutlinedIcon className="text-[#46A358]" />
          +88 01911 717 490
        </p>
      </div>

      <div className="footerINfo mt-6">
        <ul className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 footerUl text-center md:text-left">
          {footerItems?.map((item, inx) => (
            <li className="font-bold text-[18px]" key={inx}>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-4">
          {[...Array(4)].map((_, colIdx) => (
            <ul key={colIdx} className="flex flex-col gap-2 text-center sm:text-left mx-auto sm:mx-0">
              {footerDesc?.map((item, inx) => (
                <li className="text-[14px]" key={inx}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <p className="text-[14px] text-center">
          © 2021 GreenShop. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
