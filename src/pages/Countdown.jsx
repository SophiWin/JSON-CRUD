// Intended for the Assignment of UseEffect and useState Hooks ,Thanks !
import React, { useEffect, useState } from "react";

export default function Countdown() {
  const endTime = new Date("June 30,2024 00:00:00").getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const difference = endTime - currentTime;

  let remainingDay = Math.floor(difference / (1000 * 60 * 60 * 24));
  let remainingHour = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let remainingMinute = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  let remainingSecond = Math.floor((difference % (1000 * 60)) / 1000);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
    if (difference <= 0) {
      alert("Countdown is ended Now!");
    }
  }, [currentTime]);

  return (
    <div className="  font-bold text-xl shadow-lg  h-[200px] w-2/3 mx-auto mt-10">
      <div className="text-center">Countdown is still Running!</div>
      <div className="flex justify-center items-center mt-10 space-x-10 ">
        <div>
          {remainingDay}
          <span className="block font-serif font-light text-pink-600">
            Days
          </span>
        </div>
        <div>
          {remainingHour}
          <span className="block font-serif font-light text-pink-600">
            Hours
          </span>
        </div>
        <div>
          {remainingMinute}
          <span className="block font-serif font-light text-pink-600">
            Minutes
          </span>
        </div>
        <div>
          {remainingSecond}
          <span className="block font-serif font-light text-pink-600">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
}
