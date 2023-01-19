import OvertimeCard from "@/components/EmployeePage/OvertimeCard/OvertimeCard";
import UpdatesCard from "@/components/EmployeePage/UpdatesCard/UpdatesCard";

const EmployeeDashPage = (props) => {
  return (
    <>
      <div>
        <OvertimeCard>
          <UpdatesCard />
        </OvertimeCard>
      </div>
    </>
  );
};

export default EmployeeDashPage;
