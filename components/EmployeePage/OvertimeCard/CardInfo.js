const CardInfo = ({}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 p-4 bg-red-500 rounded-xl mb-4">
        <p>Tuesday - 1/24</p>
        <span>8 am - 1 pm</span>
        <button className="bg-red-50 w-full">Claim OT</button>
      </div>
    </>
  );
};

export default CardInfo;
