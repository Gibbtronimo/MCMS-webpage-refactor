import React from 'react';

interface HeaderTabProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ label, href, isActive = false }) => {
  return (
    <a
      href={href}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
      }`}
    >
      {label}
    </a>
  );
};

const Header: React.FC = () => {
  const navigationTabs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Staff', href: '/staff' },
    { label: 'Links', href: '/links' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'eCashier', href: '/ecashier' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">MCMS</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs Section */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationTabs.map((tab, index) => (
              <HeaderTab
                key={index}
                label={tab.label}
                href={tab.href}
                isActive={tab.href === '/'} // You can make this dynamic based on current route
              />
            ))}
          </nav>

          {/* eCashier Button Section */}
          <div className="flex items-center">
            <a 
              href="/eCashier" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              eCashier
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

