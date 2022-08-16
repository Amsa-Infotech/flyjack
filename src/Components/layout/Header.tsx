/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import logo from '../../assets/logos/header_logo.png';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  SearchIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const headerMenus = [
    {
      name: 'Soutions',
      menus: [
        {
          name: 'Global Forwarding',
          href: '/global-forwarding',
          menus: ['Freight Management', 'Air Freight', 'Ocean Freight']
        },
        {
          name: 'Customs Clearance',
          href: 'about',
          menus: [
            'EXIM Export Import Solutions',
            'Centralized Customs filing',
            'Centre Of Exellence',
            'Inland Haulage',
            'DGFT Directoreate General Of Foreign Trade'
          ]
        },
        {
          name: 'Project Logistics',
          href: 'about',
          menus: ['Special Projects']
        },
        {
          name: 'Contract Warehousing',
          href: 'about',
          menus: [
            'Warehouse Management',
            'Inplant Management',
            'Value Added Services',
            'FTWZ',
            'Multipurpose Logistics Centres',
            'BTS Built to Suit'
          ]
        },
        {
          name: 'Transportation',
          href: 'about',
          menus: ['Primary Transportation', 'Secondary Transportation', 'Reverse Logistics']
        },
        {
          name: 'Technology e-Carex 2.0',
          href: 'about',
          menus: [
            'iFreight Freight Management System',
            'iCS Customs Solutions',
            'iWS Warehouse Management System',
            'iTrans Transport Management System',
            'iCT Control Tower',
            'RPA Robotic Process Automation'
          ]
        },
        {
          name: 'Logistics Engineering',
          href: 'about',
          menus: ['Solution Design', 'iBuisiness Excellence', 'Project Implementation', 'HSSE']
        }
      ]
    },
    {
      name: 'Industry',
      menus: []
    },
    {
      name: 'About Us',
      menus: []
    },
    {
      name: 'Careers',
      menus: [],
      path: null
    },
    {
      name: 'Contact',
      menus: [],

      path: null
    }
  ];
  const solutions = [
    {
      name: 'Global Forwarding',
      href: '/global-forwarding',
      menus: ['Freight Management', 'Air Freight', 'Ocean Freight']
    },
    {
      name: 'Customs Clearance',
      href: '#',
      menus: [
        'EXIM Export Import Solutions',
        'Centralized Customs filing',
        'Centre Of Exellence',
        'Inland Haulage',
        'DGFT Directoreate General Of Foreign Trade'
      ]
    },
    {
      name: 'Project Logistics',
      href: '#',
      menus: ['Special Projects']
    },
    {
      name: 'Contract Warehousing',
      href: '#',
      menus: [
        'Warehouse Management',
        'Inplant Management',
        'Value Added Services',
        'FTWZ',
        'Multipurpose Logistics Centres',
        'BTS Built to Suit'
      ]
    },
    {
      name: 'Transportation',
      href: '#',
      menus: ['Primary Transportation', 'Secondary Transportation', 'Reverse Logistics']
    },
    {
      name: 'Technology e-Carex 2.0',
      href: '#',
      menus: [
        'iFreight Freight Management System',
        'iCS Customs Solutions',
        'iWS Warehouse Management System',
        'iTrans Transport Management System',
        'iCT Control Tower',
        'RPA Robotic Process Automation'
      ]
    },
    {
      name: 'Logistics Engineering',
      href: '#',
      menus: ['Solution Design', 'iBuisiness Excellence', 'Project Implementation', 'HSSE']
    }
  ];

  const industries = [
    {
      name: 'Automotive',
      href: 'automotive'
    },
    {
      name: 'Telecom',
      href: '#'
    },
    {
      name: 'Consumer Durables',
      href: '#'
    },
    {
      name: 'Engineering',
      href: '#'
    },
    {
      name: 'Industrial',
      href: '#'
    },
    {
      name: 'Healthcare',
      href: '#'
    },
    {
      name: 'FMCG',
      href: '#'
    },
    {
      name: 'Chemical',
      href: '#'
    },
    {
      name: 'Retail',
      href: '#'
    }
  ];
  const aboutUs = [
    {
      name: 'Who We Are',
      href: 'about'
    },
    {
      name: 'Philosophy & Mission',
      href: 'about'
    },
    {
      name: 'Leadership Team',
      href: 'about'
    },
    {
      name: 'Media & News',
      href: 'about'
    },
    {
      name: 'Awards & Accredetions',
      href: 'about'
    },
    {
      name: 'CSR',
      href: 'about'
    }
  ];
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: SupportIcon
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkAltIcon
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon }
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  const [hoveredIndex, setSubmenuIndex] = useState<number>();
  const [selectedIndex, showSubMenus] = useState<number>(0);

  return (
    <Popover className="relative bg-white ">
      {({ open }) => (
        <>
          <div className="z-10 px-4 mx-auto max-w-[80%]">
            <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <img className="w-auto h-[4.5rem]" src={logo} alt="" />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-[#4AAF70]' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-[#4AAF70] focus:outline-none'
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-[#4AAF70]' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-[#4AAF70]'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-[16rem] max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {solutions.map((item, index) => (
                                <div
                                  key={item.name}
                                  className="relative cursor-pointer flex items-start rounded-lg hover:text-[#4AAF70] group"
                                  onMouseEnter={() => setSubmenuIndex(index)}
                                >
                                  <div className="basis-48">
                                    <p className="text-base font-medium text-gray-600 hover:text-[#4AAF70]">{item.name}</p>
                                  </div>
                                  <ChevronRightIcon
                                    className={classNames('-mr-20 h-5 w-5 group-hover:text-[#4AAF70] text-gray-600')}
                                    aria-hidden="true"
                                  />
                                  {index === hoveredIndex && (
                                    <Transition>
                                      <Popover.Panel
                                        static
                                        className=" absolute block z-20 w-[16rem] px-20 sm:px-0 translate-x-[5rem] -translate-y-2"
                                      >
                                        <div className="ml-2 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                          <div className="grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                                            {item.menus?.map(menu => (
                                              <div
                                                key={menu}
                                                className="relative flex items-start rounded-lg hover:text-[#4AAF70] group
                                                "
                                                onClick={() => navigate(item.href)}
                                              >
                                                <div className="basis-48">
                                                  <p className="text-base font-medium text-gray-600 hover:text-[#4AAF70]">
                                                    {menu}
                                                  </p>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </Transition>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-[#4AAF70]' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                        )}
                      >
                        <span>Industry</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-[#4AAF70]' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-[16rem] max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {industries.map(item => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start rounded-lg hover:text-[#4AAF70] group"
                                >
                                  <div className="basis-48">
                                    <p className="text-base font-medium text-gray-600 hover:text-[#4AAF70]">{item.name}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                        )}
                      >
                        <span>About Us</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 w-[16rem] max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {aboutUs.map(item => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start rounded-lg hover:text-[#4AAF70] group"
                                >
                                  <div className="basis-48">
                                    <p className="text-base font-medium text-gray-600 hover:text-[#4AAF70]">{item.name}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Careers
                </a>
                <Link className="text-base font-medium text-gray-500 hover:text-gray-900" to="/contact">
                  Contact
                </Link>
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-white bg-[#ed7e00]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Search
                  <SearchIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
                </button>
                <div className="w-px h-6 ml-6 mr-3 bg-gray-300"></div>

                <svg className="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* for small screen */}

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="w-auto h-8" src={logo} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid mb-2 gap-y-8">
                      {headerMenus.map((item, index) => (
                        <div>
                          <button
                            key={item.name}
                            className="flex items-center p-3 -m-3 rounded-md"
                            onClick={() => showSubMenus(index)}
                          >
                            <span className="ml-3 text-base font-medium text-gray-900 hover:text-[#4AAF70]">{item.name}</span>
                          </button>
                          {index === selectedIndex && (
                            <div className="px-5 py-6 space-y-6 border-t-2 ">
                              <div className="">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                  </a>

                                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                  </a>
                                  {resources.map(item => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
