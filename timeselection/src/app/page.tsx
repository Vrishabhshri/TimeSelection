"use client";

import { useState } from "react";

export default function MeetingTimePicker() {
  const initialTimes = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  ];

  const [availableTimes, setAvailableTimes] = useState(initialTimes);
  const [name, setName] = useState("");

  const handleSelectTime = (time) => {
    if (!name.trim()) {
      alert("Please enter your name before selecting a time.");
      return;
    }
    setAvailableTimes(availableTimes.filter(t => t !== time));
    const storedSelections = JSON.parse(sessionStorage.getItem("selectedTimes")) || [];
    sessionStorage.setItem("selectedTimes", JSON.stringify([...storedSelections, { name, time }]));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-semibold mb-2">Select a Meeting Time</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <ul>
        {availableTimes.map((time) => (
          <li key={time} className="mb-1">
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleSelectTime(time)}
            >
              {time}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
