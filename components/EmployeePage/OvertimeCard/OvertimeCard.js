import CardInfo from "./CardInfo";

const OvertimeCard = ({ children }) => {
  return (
    <>
      <div className="flex font-mono">
        <div className="flex flex-col w-72 ml-2 px-4 py-8 overflow-y-auto border-4 h-[100vh]">
          <h2 className="flex items-center justify-center">OT AVAILABILITY</h2>

          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li>
                  <CardInfo />
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default OvertimeCard;
