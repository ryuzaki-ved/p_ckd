import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Microscope, User, ChevronDown, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Header() {
  const location = useLocation();
  const { currentUser } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50 animate-gradient-x">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link 
              to="/dashboard" 
              className="flex items-center space-x-2 transform hover:scale-105 transition-transform"
            >
              <Microscope className="h-8 w-8 animate-float" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                KidneyAI
              </span>
            </Link>
            
            <nav className="hidden lg:flex space-x-1">
              {[
                { path: '/about', label: 'About' },
                { path: '/technology', label: 'Technology' },
                { path: '/ml-performance', label: 'Performance' },
                { path: '/faq/basics', label: 'FAQ' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isActive(path) 
                      ? 'bg-white/20 text-white font-semibold shadow-glow' 
                      : 'hover:bg-white/10 hover:text-white text-blue-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {currentUser && (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="hidden sm:inline-block">{currentUser.displayName || 'Profile'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 animate-fadeIn">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Dashboard
                    </Link>
                  </div>
                )}
              </div>
            )}

            <button
              className="lg:hidden bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none group"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className={`h-6 w-6 transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 pb-2 animate-slideDown">
            <nav className="flex flex-col space-y-2">
              {[
                { path: '/about', label: 'About' },
                { path: '/technology', label: 'Technology' },
                { path: '/ml-performance', label: 'Performance' },
                { path: '/faq/basics', label: 'FAQ' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isActive(path) 
                      ? 'bg-white/20 text-white font-semibold shadow-glow' 
                      : 'hover:bg-white/10 hover:text-white text-blue-100'
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}