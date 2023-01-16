import { use, useState } from "react";

const Clock = ({}) => {
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const [totalTime, setTotalTime] = useState(undefined);
  const [totalPay, setTotalPay] = useState(undefined);

  const clockInHandler = () => {
    const start = new Date();

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
    const end = new Date();

    setEndTime(end);

    const time = Math.abs(startTime - end) / 1000;
    const final = timeConvert(time);
    setTotalTime(final);
  };

  return (
    <>
      <div className=" flex flex-col ">
        <button className="bg-red-50 text-black" onClick={clockInHandler}>
          Clock In
        </button>
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
