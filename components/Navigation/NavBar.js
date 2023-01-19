import Clock from "../EmployeePage/Clock/Clock";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

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
      <div className="h-12 font-mono">
        <div className=" m-2">
          <nav>
            <ul className="flex justify-between bg-[#b3b1b1] border-2 shadow-md rounded-xl p-1">
              <li>
                <div className="">
                  <h2
                    className={`lg:text-2xl  h-12 font-roboto flex items-center  p-1 rounded-lg  ${
                      router.pathname === "/employee-dash"
                        ? "bg-gray-500"
                        : null
                    } `}
                  >
                    <Link href="/employee-dash">Internal Workforce</Link>
                  </h2>
                </div>
              </li>
              <li className="lg:text-2xl rounded-lg  font-roboto ml-auto  bg-gray-500 items-center p-1 flex">
                <Clock
                  addStartTime={addTimeHandler}
                  finishTime={finishTimeHandler}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
