import logo from '../assets/images/about-image3.png';
import customer from '../assets/logos/customer_icon.png';
import ocean from '../assets/logos/ocean_icon.png';
import warehouse from '../assets/logos/warehouse_icon.png';
import image1 from '../assets/images/home_page_image.jpg';
import image2 from '../assets/images/gf-image4.png';
import image4 from '../assets/images/home_automotive.jpg';
import image3 from '../assets/images/gf-image5.png';
import image5 from '../assets/images/consumer_durable.jpg';
import image6 from '../assets/images/automotive-image4.png';
import image7 from '../assets/images/csr_1.jpg';
import banner1 from '../assets/banners/global_network_2.jpg';
import banner2 from '../assets/banners/integrated_logistic_1.jpg';
import banner3 from '../assets/banners/logisteed_3.jpg';
import banner4 from '../assets/banners/taking_future_4.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CSSProperties } from 'react';

const home = () => {
  const indicatorStyles: CSSProperties = {
    background: '#ccc',
    width: 30,
    height: 3,
    display: 'inline-block',
    margin: '0 8px'
  };

  return (
    <div>
      <Carousel
        axis="horizontal"
        showStatus={false}
        showThumbs={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: '#fff' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div>
          <img src={banner1} className="relative 2xl:h-[56rem] md:h-[30rem] lg:h-[34rem]" alt="" />
          <div className="absolute pl-10 font-bold text-white lg:text-6xl md:text-3xl left-10 top-1/2">
            <p>Global Network</p>
            <p>and Presence</p>
          </div>
        </div>
        <div>
          <img src={banner2} alt="" className="relative 2xl:h-[56rem] md:h-[30rem] lg:h-[34rem]" />
          <div className="absolute pl-10 font-bold text-black lg:text-5xl md:text-3xl left-10 top-1/2">
            <p>Integrated Logistics</p>
            <p>Solutions Partner</p>
          </div>
        </div>
        <div>
          <img src={banner3} className="relative 2xl:h-[56rem] md:h-[30rem] lg:h-[34rem]" alt="" />
          <div className="absolute font-bold text-black left-[20rem] right-0 lg:-right-[15rem] md:right-1 pt-10 top-32 2xl:top-[15rem] lg:top-[10rem] md:top-[5rem] sm:top-[2rem] xs:-top-[2rem] 2xl:-right-[25rem]">
            <p className="text-xl sm:text-lg xs:text-base lg:text-3xl">Toward New Dimensions</p>
            <p className="py-2 xs:py-0 md:py-5 xs:text-xs md:text-2xl lg:text-4xl 2xl:text-5xl 2xl:py-10">LOGISTEED</p>
            <p className="text-sm 2xl:text-2xl lg:text-lg md:text-base xs:text-xs">LOGISTEED is a</p>
            <p className="2xl:text-2xl lg:text-lg md:text-base xs:text-xs"> word that combines </p>
            <p className="2xl:text-2xl lg:text-lg md:text-base xs:text-xs"> Logistics with exceed.</p>
            <p className="2xl:text-2xl lg:text-lg md:text-base xs:text-xs"> Proceed, Succeed and Speed</p>
          </div>
        </div>
        <div>
          <img src={banner4} alt="" className="relative 2xl:h-[56rem] md:h-[30rem] lg:h-[34rem]" />
          <div className="absolute pl-20 text-white top-[18rem] 2xl:top-[34rem] lg:top-[25rem] lg:text-xl sm:top-[12rem] md:top-[20rem]">
            <p>Amid various technological breakthroughs and an increasing diversification </p>
            <p> of services, procedures, and values in society, Hitachi Transport System and</p>
            <p>FLYJAC will attempt to expand our collaborative efforts across businesses </p>
            <p>and industries to achieve new innovations.</p>
          </div>
        </div>
      </Carousel>

      <div className="relative max-w-[45rem] mx-auto pt-32 pl-16">
        <img src={logo} className="max-w-[80%]" alt="" />
      </div>
      <div className="p-10 text-2xl max-w-[70rem] text-center mx-auto pb-20 font-sans">
        <p>A Group Company of Hitachi Transport Syste Japan, Flyjac is a Glocal Brand in</p>
        <p>
          the supply Chain Industry, with <span className="font-bold">30+ years </span> of experience in India. Founded in 1990.
        </p>
      </div>
      <section className=" bg-[#4AAF70] h-[21rem] py-16">
        <div className="grid grid-cols-3 text-center">
          <div className="py-5">
            <img src={customer} className="w-10 mx-auto mb-3 scale-125" alt="" />
            <span className="text-3xl text-white">5000+</span>
            <p className="text-lg font-bold">Customers</p>
          </div>
          <div className="py-5 border-l-2 border-r-2">
            <img src={ocean} className="w-10 mx-auto mb-3 scale-150" alt="" />
            <span className="text-3xl text-white">1.2 million</span>
            <p className="text-lg font-bold">Ocean Freight FCL (TEUs)</p>
            <p className="text-lg font-bold">handled till Date</p>
          </div>
          <div className="py-5">
            <img src={warehouse} className="w-10 mx-auto mb-3 scale-150" alt="" />
            <span className="text-3xl text-white">4.5 million</span>
            <p className="text-lg font-bold">SFT warehouse Management</p>
            <p className="text-lg font-bold">Pan India</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="text-[2rem] text-[#ed7e00] uppercase text-center font-sans">
          <span>
            Our <span className="font-bold">Solutions</span>
          </span>
        </div>
        <div className="mt-4 text-lg tracking-wide text-center text-gray-500">
          <p>We're a truly Glocal Integrated Logistics Solution Partner providing array</p>
          <p>of services to our existing and potential customers.</p>
        </div>
        {/* images */}
        <div className="grid grid-cols-3 gap-10 max-w-[80rem] mx-auto py-20">
          <div className="">
            <img src={image1} className="h-[30rem] w-full" alt="" />
            <div className="text-2xl text-center text-gray-500">
              <p className="py-2">Global</p>
              <p className="pb-6 font-bold"> Forwarding Solutions</p>
              <a href="#" className="text-[#18d26e] ">
                <div className="flex justify-center">
                  <span className="text-lg">Explore</span>
                  <div className="w-6 h-6 border border-[#18d26e] rounded-full ml-4 mt-px"></div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <img src={image2} alt="" className="h-[30rem] w-full" />
            <div className="text-2xl text-center text-gray-500">
              <p className="py-2">Contact Logistics</p>
              <p className="pb-6 font-bold "> & Trasport Solutions</p>
              <a href="#" className="text-[#18d26e] ">
                <div className="flex justify-center">
                  <span className="text-lg">Explore</span>
                  <div className="w-6 h-6 border border-[#18d26e] rounded-full ml-4 mt-px"></div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <img src={image3} alt="" className="h-[30rem] w-full" />
            <div className="text-2xl text-center text-gray-500">
              <p className="py-2">Customized</p>
              <p className="pb-6 font-bold "> Solutions</p>
              <a href="#" className="text-[#18d26e] ">
                <div className="flex justify-center">
                  <span className="text-lg">Explore</span>
                  <div className="w-6 h-6 border border-[#18d26e] rounded-full ml-4 mt-px"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 bg-white">
        <div className="text-[2rem] text-[#ed7e00] uppercase text-center">
          <span>
            Industry <span className="font-bold">Expertise</span>
          </span>
        </div>
        <div className="mt-4 text-lg tracking-wide text-center text-gray-500">
          <p>We are specialists and domain expertise in major industry verticals delivering our</p>
          <p>best solutions through our large global network and best skilled personnel.</p>
        </div>
        {/* images */}
        <div className="grid grid-cols-3 gap-10 max-w-[80rem] mx-auto py-20 after:">
          {/* <div> */}
          <div className="relative inline-block overflow-hidden cursor-pointer group ">
            <div className="h-[30rem] w-full bg-[url('assets/images/home_automotive.jpg')] hover:scale-125  transition ease-in-out delay-150 duration-500 hover:opacity-40">
              <div className="absolute hidden w-full text-3xl text-center text-white transition duration-500 ease-in-out delay-100 pt-44 h-28 group-hover:block">
                <p>01</p>
                <p>Automotive</p>
              </div>
            </div>
          </div>
          <div className="relative inline-block overflow-hidden cursor-pointer group ">
            <div className="h-[30rem] w-full bg-[url('assets/images/consumer_durable.jpg')] hover:scale-125  transition ease-in-out delay-150 duration-500 hover:opacity-40">
              <div className="absolute hidden w-full text-3xl text-center text-white transition duration-500 ease-in-out delay-100 pt-44 h-28 group-hover:block">
                <p>02</p>
                <p>Consumer Durable</p>
              </div>
            </div>
          </div>
          <div className="relative inline-block overflow-hidden cursor-pointer group ">
            <div className="h-[30rem] w-full bg-[url('assets/images/automotive-image4.png')] hover:scale-125  transition ease-in-out delay-150 duration-500 hover:opacity-40">
              <div className="absolute hidden w-full text-3xl text-center text-white transition duration-500 ease-in-out delay-100 pt-44 h-28 group-hover:block">
                <p>03</p>
                <p>Engineering</p>
              </div>
            </div>
          </div>
          {/* <div>
            <img src={image5} alt="" className="h-[30rem] w-full" />
          </div>
          <div>
            <img src={image6} alt="" className="h-[30rem] w-full" />
          </div> */}
        </div>

        <div className="grid grid-cols-5 max-w-[80rem] mx-auto py-20">
          <div className="col-span-2">
            <div className="bg-[#ec701d] relative text-center text-white top-1/3 z-10">
              <div className="py-8">
                <div className="py-2 text-2xl">
                  <span className="uppercase">
                    CSR <span className="font-bold">AND Sustainability</span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-bold">Social Welfare in Collaboration with Warrier Foundation</span>
                  <p className="text-xs">This thought epitomises our purpose to help those less fortunate to</p>
                  <p className="text-xs">face the world and live their life meaningfully.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <img src={image7} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
