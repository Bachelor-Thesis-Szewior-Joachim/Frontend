import { React, useState, useEffect } from "react";
import Header from "../../../header";
import "./historicalData.css";
import { useNavigate } from "react-router-dom";

const HistoricalData = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [daysInMonth, setDaysInMonth] = useState(31);
  const navigate = useNavigate();

  // Update the number of days when the month changes
  useEffect(() => {
    const days = new Date(selectedYear, selectedMonth, 0).getDate();
    setDaysInMonth(days);
    if (selectedDay > days) setSelectedDay(days); // Adjust if day exceeds the number of days
  }, [selectedMonth, selectedYear, selectedDay]);

  const years = [2023,2024];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleSubmit = () => {
    navigate(`/historicalData/${selectedYear}/${selectedMonth}/${selectedDay}`, {state: {selectedYear, selectedMonth, selectedDay}});
  };

  return (
    <div>
      <Header />
      <div className="date-picker-container">
        <h2>Select a Date</h2>

        <div className="date-grids-container">
          {/* Year selection */}
          <div className="date-grid date-grid-years" >
            {years.map((year) => (
              <div
                key={year}
                className={`date-square ${
                  selectedYear === year ? "selected" : ""
                }`}
                onClick={() => setSelectedYear(year)}
                style={{height: '10%'}}
              >
                {year}
              </div>
            ))}
          </div>

          {/* Month selection */}
          <div className="date-grid date-grid-months">
            {months.map((month, index) => (
              <div
                key={month}
                className={`date-square ${
                  selectedMonth === index + 1 ? "selected" : ""
                }`}
                onClick={() => setSelectedMonth(index + 1)}
              >
                {month}
              </div>
            ))}
          </div>

          {/* Day selection */}
          <div className="date-grid date-grid-days">
            {days.map((day) => (
              <div
                key={day}
                className={`date-square ${
                  selectedDay === day ? "selected" : ""
                }`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        <button className="view-ranking-btn" onClick={() => handleSubmit()}>
          View Token Rankings
        </button>
      </div>
    </div>
  );
};

export default HistoricalData;
