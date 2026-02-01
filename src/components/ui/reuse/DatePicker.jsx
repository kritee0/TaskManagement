import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { MdOutlineDateRange } from "react-icons/md";

const DatePickerInput = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-28">
    
      {/* <input
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ""}
        placeholder="Select date"
       
        readOnly
        className="border p-2 rounded w-full cursor-pointer"
      /> */}

      <MdOutlineDateRange  size={24} color="white"  onClick={() => setCalendarOpen(prev=>!prev)} />

    
      {calendarOpen && (
        <div className="absolute z-50 mt-1 bg-white border rounded shadow-lg">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setCalendarOpen(false); 
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
