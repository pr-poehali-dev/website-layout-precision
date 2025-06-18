import React from "react";
import BookingForm from "./BookingForm";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      <div className="absolute inset-0">
        <div className="container mx-auto px-6 h-screen flex items-center justify-center relative">
          <h1 className="text-white text-8xl lg:text-9xl font-bold text-center">
            Лесное
          </h1>

          <div className="absolute top-20 right-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
