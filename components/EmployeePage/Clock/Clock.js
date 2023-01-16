import { useState } from "react";

const Clock = ({}) => {
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const clockInHandler = () => {
    const start = new Date("2023-01-16T08:30:00");
    setStartTime(start);
  };

  const timeConvert = (time) => {
    const t = Number(time);
    const hour = Math.floor(t / 3600);
    const minute = Math.floor((t % 3600) / 60);
    const seconds = Math.floor((t % 3600) % 60);

    const hoursDisplay = hour > 0 ? hour + (hour === 1 ? "hour" : "hours") : "";
    const minutesDisplay =
      minute > 0 ? minute + (minute === 1 ? "minute" : "minutes") : "";
    const secondsDisplay =
      seconds > 0 ? seconds + (seconds === 1 ? "second" : "seconds") : "";

    return hoursDisplay + minutesDisplay + secondsDisplay;
  };

  const clockOutHandler = () => {
    const end = new Date("2023-01-16T09:30:00");

    setEndTime(end);

    const time = Math.abs(startTime - end) / 1000;
    const final = timeConvert(time);
    setTotalTime(final);
  };

  return (
    <>
      <div className=" w-full flex flex-col ">
        <button className="bg-red-50 text-black" onClick={clockInHandler}>
          Clock In
        </button>
        {/* button should be disabled unless clock in button was clicked */}
        <button onClick={clockOutHandler}>Clock Out</button>
      </div>
      <div>
        {startTime.toLocaleString()} To {endTime.toLocaleString()}
        {totalTime}
      </div>
    </>
  );
};

export default Clock;
