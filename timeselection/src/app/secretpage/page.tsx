"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function SecretPage() {
  const [selectedTimes, setSelectedTimes] = useState([]);

  useEffect(() => {
    const fetchSelectedTimes = async () => {
      const response = await axios.get("/api/select-time");
      setSelectedTimes(response.data);
    };
    
    fetchSelectedTimes();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-lg font-semibold mb-2">Scheduled Meetings</h2>
      {selectedTimes.length === 0 ? (
        <p>No meeting times selected yet.</p>
      ) : (
        <ul>
          {selectedTimes.map((entry, index) => (
            <li key={index} className="mb-2 p-2 border rounded bg-gray-100">
              <strong>{entry.name}</strong> - {entry.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
