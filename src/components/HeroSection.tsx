import React from "react";
import BookingForm from "./BookingForm";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Отель-заповедник
              <br />
              <span className="text-green-400">Лесное</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Погрузитесь в атмосферу дикой природы и насладитесь комфортом
              современного отеля
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Узнать больше
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Виртуальный тур
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
