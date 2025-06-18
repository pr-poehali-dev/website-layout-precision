import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg w-80">
      <div className="mb-3">
        <div className="text-2xl font-bold text-gray-800">от 10 000₽</div>
        <div className="text-gray-600 text-sm">за сутки</div>
      </div>

      <form className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="checkin" className="text-gray-700 text-sm">
              Заезд
            </Label>
            <Input id="checkin" type="date" className="w-full mt-1" />
          </div>
          <div>
            <Label htmlFor="checkout" className="text-gray-700 text-sm">
              Выезд
            </Label>
            <Input id="checkout" type="date" className="w-full mt-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="guests" className="text-gray-700 text-sm">
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

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2">
          Забронировать
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
