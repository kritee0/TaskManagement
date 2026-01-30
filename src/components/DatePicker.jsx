import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const DatePickerInput = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-64">
      {/* Input field */}
      <input
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ""}
        placeholder="Select date"
        onFocus={() => setCalendarOpen(true)} // open calendar when input is focused
        readOnly
        className="border p-2 rounded w-full cursor-pointer"
      />

      {/* Calendar popup */}
      {calendarOpen && (
        <div className="absolute z-50 mt-1 bg-white border rounded shadow-lg">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setCalendarOpen(false); // close after selecting
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
