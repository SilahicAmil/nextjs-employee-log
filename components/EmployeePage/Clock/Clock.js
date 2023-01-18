import TimeWorked from "./TimeWorked";
import { useState } from "react";

const Clock = ({ addStartTime, finishTime }) => {
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const [clockedIn, setClockedIn] = useState(false);

  const id = "Amil Silahic";

  const clockInHandler = () => {
    const start = new Date();

    const data = {
      id,
      timeStart: start,
    };

    setStartTime(start);
    addStartTime(data);
    setClockedIn(true);
  };

  const timeConvert = (time) => {
    const t = Number(time);
    const hours = Math.floor(t / 3600);
    const minutes = Math.floor((t % 3600) / 60);
    const seconds = Math.floor((t % 3600) % 60);

    const hoursDisplay =
      hours > 0 ? hours + (hours === 1 ? "hour" : "hours") : "";
    const minutesDisplay =
      minutes > 0 ? minutes + (minutes === 1 ? "minute" : "minutes") : "";
    const secondsDisplay =
      seconds > 0 ? seconds + (seconds === 1 ? "second" : "seconds") : "";

    return hoursDisplay + minutesDisplay + secondsDisplay;
  };

  const clockOutHandler = () => {
    const end = new Date();

    setEndTime(end);

    const time = Math.abs(startTime - end) / 1000;
    const final = timeConvert(time);

    const finalData = {
      id,
      startTime,
      timeOut: end,
    };

    finishTime(finalData);
    setTotalTime(final);
    setClockedIn(false);
  };

  return (
    <>
      <div className=" w-full flex flex-col h-full mt-6">
        {!clockedIn ? (
          <button className="bg-red-50 text-black" onClick={clockInHandler}>
            Clock In
          </button>
        ) : (
          <button onClick={clockOutHandler} className="bg-red-50 text-black">
            Clock Out
          </button>
        )}
        {/* button should be disabled unless clock in button was clicked */}
      </div>

      <TimeWorked
        startTime={startTime.toLocaleString()}
        endTime={endTime.toLocaleString()}
        totalTime={totalTime}
      />
    </>
  );
};

export default Clock;
