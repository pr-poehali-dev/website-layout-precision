import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-lg max-w-md">
      <div className="mb-4">
        <div className="text-3xl font-bold text-gray-800 mb-2">от 10 000₽</div>
        <div className="text-gray-600">за сутки</div>
      </div>

      <form className="space-y-4">
        <div>
          <Label htmlFor="checkin" className="text-gray-700">
            Заезд
          </Label>
          <Input id="checkin" type="date" className="w-full mt-1" />
        </div>

        <div>
          <Label htmlFor="checkout" className="text-gray-700">
            Выезд
          </Label>
          <Input id="checkout" type="date" className="w-full mt-1" />
        </div>

        <div>
          <Label htmlFor="guests" className="text-gray-700">
            Гости
          </Label>
          <Input
            id="guests"
            type="number"
            min="1"
            max="10"
            defaultValue="2"
            className="w-full mt-1"
          />
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
          Забронировать
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
