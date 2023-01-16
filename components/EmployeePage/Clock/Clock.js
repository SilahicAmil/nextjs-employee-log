import { use, useState } from "react";

const Clock = ({}) => {
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const clockInHandler = () => {
    const start = new Date();

    setStartTime(start);
  };

  console.log(startTime);

  const clockOutHandler = () => {
    const end = new Date();

    setEndTime(end);

    const finalTime = Math.abs(startTime - end) / 1000;
    setTotalTime(finalTime);
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
