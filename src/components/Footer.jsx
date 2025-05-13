import logo from "../assets/logo.svg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { footerDesc, footerItems } from "../statick";
import footerImg from "../assets/footerImg.svg";
import teaPot from "../assets/teapot.svg";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="flex justify-between pdn flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row gap-[62px] lg:gap-[30px]">
          <div className="flex flex-col gap-2">
            <div className="w-[60px] h-[60px] rounded-full bg-[#46A35821] relative">
              <img
                className="w-[80px] h-[80px] absolute -top-[20px] -right-[20px]"
                src={footerImg}
                alt=""
              />
            </div>
            <p className="text-[17px] font-bold">Garden Care</p>
            <p className="text-[14px] max-w-[200px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-[60px] h-[60px] rounded-full bg-[#46A35821] relative">
              <img
                className="w-[80px] h-[80px] absolute -top-[20px] -right-[20px]"
                src={footerImg}
                alt=""
              />
            </div>
            <p className="text-[17px] font-bold"> Plant Renovation</p>
            <p className="text-[14px] max-w-[200px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-[60px] h-[60px] rounded-full bg-[#46A35821] relative">
              <img
                className="w-[80px] h-[80px] absolute -top-[20px] -right-[20px]"
                src={teaPot}
                alt=""
              />
            </div>
            <p className="text-[17px] font-bold">Watering Graden </p>
            <p className="text-[14px] max-w-[200px] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="max-w-[340px] flex flex-col gap-3 mt-8 lg:mt-0">
          <p className="text-[18px] font-bold">
            Would you like to join newsletters?
          </p>
          <div>
            <input
              className="shadow-2xl p-2 pdn w-full lg:w-auto"
              type="text"
              placeholder="enter your email address..."
              name=""
              id=""
            />
            <button className="bg-[#46A358] btn w-full lg:w-auto">Join</button>
          </div>
          <p className="text-[13px]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#46A3581A] min-h-[88px] items-center justify-between px-[23px] flex flex-col md:flex-row gap-y-[16px] gap-x-[60px] greenshop">
        <div className="logo flex items-center gap-2">
          <img src={logo} alt="" />
          <p className="font-extrabold text-[#46A358] text-2xl">GREENSHOP</p>
        </div>
        <p className="flex gap-[10px] font-inter font-bold items-center text-[#3D3D3D] text-[16px] leading-[22px]">
          <LocationOnOutlinedIcon className="text-[#46A358]" />
          70 West Buckingham Ave. Farmingdale, NY 11735
        </p>
        <p className="flex gap-[10px] font-inter font-bold items-center text-[#3D3D3D] text-[16px] leading-[22px]">
          <EmailTwoToneIcon className="text-[#46A358]" />
          contact@greenshop.com
        </p>
        <p className="flex gap-[10px] font-inter font-bold items-center text-[#3D3D3D] text-[16px] leading-[22px]">
          <LocalPhoneOutlinedIcon className="text-[#46A358]" /> +88 01911 717
          490
        </p>
      </div>

      <div className="footerINfo">
        <ul className="flex flex-wrap justify-between footerUl">
          {footerItems?.map((item, inx) => (
            <li className="font-bold text-[18px] w-full sm:w-auto" key={inx}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap justify-between">
          <ul className="flex flex-col gap-2 w-full sm:w-auto">
            {footerDesc?.map((item, inx) => (
              <li className="text[14px]" key={inx}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 w-full sm:w-auto">
            {footerDesc?.map((item, inx) => (
              <li className="text[14px]" key={inx}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 w-full sm:w-auto">
            {footerDesc?.map((item, inx) => (
              <li className="text[14px]" key={inx}>
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 w-full sm:w-auto">
            {footerDesc?.map((item, inx) => (
              <li className="text[14px]" key={inx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-[14px]">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
