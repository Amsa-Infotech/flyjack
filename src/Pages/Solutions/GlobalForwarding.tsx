import banner from '../../assets/images/gf-banner.png';
import image1 from '../../assets/images/gf-image1.png';
import image2 from '../../assets/images/gf-image2.png';
import image3 from '../../assets/images/gf-image3.png';
import image4 from '../../assets/images/gf-image4.png';
import image5 from '../../assets/images/gf-image5.png';
import image6 from '../../assets/images/gf-image6.png';

const GlobalForwarding = () => {
  return (
    <div>
      <img src={banner} className="w-full " alt="" />
      <nav className="flex py-3 text-black border border-gray-200 bg-[#ececec] px-[10%]" aria-label="Breadcrumb">
        <ol className="inline-flex items-center px-4 space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a className="inline-flex items-center text-sm font-medium text-black hover:text-gray-900 ">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Flyjac
            </a>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-black md:ml-2 ">Solutions</span>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-black md:ml-2 ">Global Forwarding Solutions</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="relative max-w-[80%] mx-auto p-4">
        <div className="py-4 pl-5 mt-12 border-l-4 border-l-orange-600">
          <p className="ml-4 text-4xl font-neue">
            With more than 30 Years of experience in the Global freight forwarding field, we secure your logistics need in cross
            border transportation at the shortest lead time possible, leveraging the Hitachi Transport System Group offices (HTS)
            & our exclusive partner network.
          </p>
        </div>

        {/* Freight Management */}
        <div className="p-5 mt-10">
          <div className="text-2xl">
            <span>Freight</span> <span className="font-neue">Management</span>
          </div>
          <p className="mt-2 text-lg leading-8 ">
            We are a team of specialized industry professionals having ability to handle shipments end to end across the Globe,
            covering every logistical needs. Our global network, with options of multiple modes of transportation, enables us to
            provide fast, efficient, cost-effective solutions. Coupled with our process-oriented approach, enhanced IT
            capabilities, strong customer focus, delivers the most effective & efficient shipping option available.
          </p>
        </div>
        <img src={image1} className="w-full" alt="" />

        {/* Freight Types */}
        <div className="mt-10">
          {/* Air Freight */}
          <div className="grid grid-cols-2 gap-20 ">
            <div className="px-6 lg:py-6">
              <div className="text-2xl font-neue">
                <span>Air</span> <span className="font-bold font-neue ">Freight</span>
              </div>
              <div className="max-w-[90%] lg:leading-normal leading-loose 2xl:text-xl lg:font-sm lg:tracking-tight">
                <p className="mt-5">
                  Our presence in all major airport/gateways enables the best optimized solutions for on time pick up/deliveries
                  at any part of the globe. Our large scale of operation and strong carrier relationship enable us in securing
                  competitive price & space.
                </p>
                <p className="mt-5">
                  We offer a wide range of Import & Export consolidation services, solution for Door to Door movements,
                  Temperature control cargo, DG Cargo, ODC, Flight Chartering & Domestic Air freight.
                </p>
                <p className="mt-5">
                  We provide seamless real-time visibility across, using our IT system with auto updates from airlines.
                </p>
              </div>
            </div>
            <img src={image2} className="w-full" alt="" />
          </div>

          {/* Sea Freight */}
          <div className="grid grid-cols-2 gap-20 pb-16 mt-16">
            <img src={image3} className="w-full" alt="" />

            <div className="lg:py-6">
              <div className="text-2xl ">
                <span className="font-light">Sea</span> <span className="font-neue">Freight</span>
              </div>
              <div className="leading-loose lg:leading-normal lg:w-full 2xl:text-xl xl:font-lg lg:font-sm">
                <p className="mt-5">
                  We provide flexible, dependable, and secure Ocean freight solutions with our strong and long-term carrier
                  partnerships across the Globe. We specialize in providing Direct and Multicountry consolidations services, FCL,
                  LCL Consolidations, Door to Door services, Reefer containers, Special Equipment's, ODC & Project cargo,
                  Break-bulk, RO-RO, ship chartering.
                </p>
                <p className="mt-8">
                  We provide schedule for planning, real-time updates, alerts, status of container till delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* connect with us section */}
      <section id="connect-us" className="py-24 mx-auto align-middle bg-gray-100 ">
        <div className="text-center">
          <div className="pb-16 text-4xl text-[#4AAF70] uppercase">
            Connect <span className="font-neue">With Us</span>
          </div>
          <div className="grid grid-cols-2 gap-6 pb-16">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-start-2 mt-1 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-start-2 mt-12 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-start-1 mt-1 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Mobile"
                />
              </div>

              <div className="col-start-1 mt-12 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Message"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className=" uppercase inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium text-white bg-[#ed7e00] hover:bg-[#f68606] focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </section>
      {/* other solutions section */}
      <section id="other-solution" className=" mx-auto bg-white max-w-[80%]">
        <div className="text-center">
          <div className="py-12 text-4xl text-[#4AAF70] uppercase">
            Other <span className="font-neue">Solutions</span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="">
              <img src={image4} alt="" className="" />
            </div>
            <img src={image5} alt="" />
            <img src={image6} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalForwarding;
