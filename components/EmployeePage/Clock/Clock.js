import { use, useState } from "react";

const Clock = ({}) => {
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const clockInHandler = () => {
    const start = new Date();
    console.log(start);
    setStartTime(start);
  };

  console.log(startTime);

  const clockOutHandler = () => {
    const end = new Date();
    console.log(end);
    setEndTime(end);
  };

  const finalTime = (time1, time2) => {
    const totalTime = Math.abs(time1 - time2) / 1000;

    return totalTime;
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
        {finalTime(startTime, endTime)} Seconds
      </div>
    </>
  );
};

export default Clock;
