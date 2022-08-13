import { ChevronDownIcon, SearchIcon } from '@heroicons/react/outline';
import logo from '../../assets/images/logo.png';
const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' }
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
export default function Example() {
  return (
    <header className="bg-white">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="w-auto h-14 lg:scale-150" src={logo} alt="" />
            </a>
          </div>
          <div className="ml-40 -my-2 -mr-2 space-x-8 shidden lg:block">
            {navigation.map(link => (
              <div className="flex">
                <a key={link.name} href={link.href} className="text-base font-medium text-gray-400 hover:text-indigo-50">
                  {link.name}
                </a>
                <ChevronDownIcon
                  className={classNames('text-gray-400', 'ml-2 h-5 w-5 group-hover:text-[#4AAF70]')}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-white bg-[#ed7e00] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        {/* <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map(link => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div> */}
      </nav>
    </header>
  );
}
