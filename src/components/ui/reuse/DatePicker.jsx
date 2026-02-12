import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { MdOutlineDateRange } from "react-icons/md";

const DatePickerInput = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);

  return (
    <div className="relative w-28">
       

      <MdOutlineDateRange  size={24} color="white"  onClick={() => {setCalendarOpen(prev=>!prev);setSelectedDate(date) }} />
        <span className="text-sm text-white">
        {selectedDate
          ? selectedDate.toLocaleDateString()
          : "Select date"}
      </span>

    
      {calendarOpen && (
        <div className="absolute z-50 mt-1 bg-white border rounded shadow-lg">
          
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setCalendarOpen(false); 
              setTaskData({...prev,data})          
              console.log(date)
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
