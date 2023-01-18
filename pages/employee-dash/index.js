import Clock from "@/components/EmployeePage/Clock/Clock";

const EmployeeDashPage = (props) => {
  const addTimeHandler = async (startTimeData) => {
    const response = await fetch("/api/clockIn", {
      method: "POST",
      body: JSON.stringify(startTimeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const finishTimeHandler = async (endTimeData) => {
    const response = await fetch("/api/clockOut", {
      method: "POST",
      body: JSON.stringify(endTimeData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div>
        <Clock addStartTime={addTimeHandler} finishTime={finishTimeHandler} />
      </div>
    </>
  );
};

export default EmployeeDashPage;
