import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">Лесное</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-white hover:text-green-400 transition-colors"
            >
              Об отеле
            </a>
            <a
              href="#rooms"
              className="text-white hover:text-green-400 transition-colors"
            >
              Номера и цены
            </a>
            <a
              href="#events"
              className="text-white hover:text-green-400 transition-colors"
            >
              Мероприятия
            </a>
            <a
              href="#contacts"
              className="text-white hover:text-green-400 transition-colors"
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
