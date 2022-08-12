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

const home = () => {
  return (
    <div>
      <div className="relative max-w-[50rem] mx-auto items-center pt-10">
        <img src={logo} alt="" />
      </div>
      <div className="p-10 text-2xl max-w-[70rem] text-center mx-auto pb-20">
        <p>A Group Company of Hitachi Transport Syste Japan, Flyjac is a Glocal Brand in</p>
        <p>the supply Chain Industry, with 30+ years of experience in India. Founded in 1990.</p>
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
            <div className="bg-[#ec701d]">
              <div></div>
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
