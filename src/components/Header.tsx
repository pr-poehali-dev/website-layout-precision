import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-white text-3xl font-bold tracking-wide">
            Лесное
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#about"
              className="text-white hover:text-green-400 transition-colors text-lg"
            >
              Об отеле
            </a>
            <a
              href="#rooms"
              className="text-white hover:text-green-400 transition-colors text-lg"
            >
              Номера и цены
            </a>
            <a
              href="#events"
              className="text-white hover:text-green-400 transition-colors text-lg"
            >
              Мероприятия
            </a>
            <a
              href="#contacts"
              className="text-white hover:text-green-400 transition-colors text-lg"
            >
              Контакты
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
