const TimeWorked = ({ startTime, endTime, totalTime }) => {
  return (
    <div className="flex flex-col mt-4 w-64 md:h-4/12 2 h-screen ml-4 rounded-xl  items-center bg-cyan-500 ">
      <h1 className="mt-4 mb-4">Recent Days Worked</h1>
      <div className=" pb-4">
        <div>
          {/* eventually fetch this data from DB - easier with react context
        so dont have to prop drill
         */}
          {/* also this could possibly be its own component */}
          <div className="flex flex-col">
            <span>{startTime}</span>
            <p className="flex justify-center items-center">To</p>
            <span>{endTime}</span>
            <hr className="text-3xl p-2 mt-2 w-full" />
          </div>

          <div className="flex flex-col col-span-2">
            <span>{startTime}</span>
            <p className="flex justify-center items-center">To</p>
            <span>{endTime}</span>
            <hr className="text-3xl p-2 mt-2 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeWorked;
