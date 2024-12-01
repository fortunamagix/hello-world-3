import { useTheme } from './ThemeContext';
import { useState } from 'react';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-dark text-luxury-light' 
        : 'bg-gradient-light text-luxury-dark'
    }`}>
      {/* Glassy Navbar */}
      <nav className="navbar-glass py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
          <h1 className="text-2xl font-bold">
            <span className="text-luxury-accent">Luxury</span> Hello World
          </h1>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative px-2 py-1 transition-colors duration-200 hover:text-luxury-accent ${
                  activePage === item.id 
                    ? isDarkMode 
                      ? 'text-luxury-accent' 
                      : 'text-luxury-dark' 
                    : ''
                }`}
              >
                {item.label}
                {activePage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-luxury-accent rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-200 hover:scale-110
              ${isDarkMode 
                ? 'bg-luxury-accent hover:bg-luxury-accent-dark' 
                : 'bg-luxury-accent hover:bg-luxury-accent-dark'
              } text-white`}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Welcome to the <span className="text-luxury-accent">Luxury</span> Experience
          </h2>
          <p className="text-xl opacity-90 mb-4">
            A sophisticated dark mode implementation with a glassy navbar
          </p>
          <p className="text-lg opacity-80">
            Currently viewing: <span className="text-luxury-accent capitalize">{activePage}</span>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
