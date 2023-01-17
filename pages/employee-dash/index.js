import Clock from "@/components/EmployeePage/Clock/Clock";

const EmployeeDashPage = () => {
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

  const finishTimeHandler = (endTimeData) => {
    console.log(endTimeData);
  };

  return (
    <>
      <div>
        <h1>Employee Dash Page</h1>
        <Clock addStartTime={addTimeHandler} finishTime={finishTimeHandler} />
      </div>
    </>
  );
};

export default EmployeeDashPage;
