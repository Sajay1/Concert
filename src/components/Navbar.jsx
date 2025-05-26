import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole?.toLowerCase() || '');
  }, [location]);

  const logout = () => {
    localStorage.clear();
    setRole('');
    navigate('/');
  };

  const renderLinks = () => {
    switch (role) {
      case 'user':
        return (
          <div className='flex'>
            <Link to="/home" className={linkStyle}>Concerts</Link>
            <Link to="/profile" className={linkStyle}></Link>
            <button onClick={logout} className={linkStyle}>Logout</button>
          </div>
        );
      case 'admin':
        return (
          <div className='flex'>
            <Link to="/admin" className={linkStyle}>Admin Panel</Link>
            <button onClick={logout} className={linkStyle}>Logout</button>
          </div>
        );
      default:
        return (
          <>
            <Link to="/" className={linkStyle}>Login</Link>
            <Link to="/signup" className={linkStyle}>Signup</Link>
          </>
        );
    }
  };

  const linkStyle = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <h1 className="text-white font-bold text-2xl ">Concert</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">{renderLinks()}</div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
              {renderLinks()}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
