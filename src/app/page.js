import Banner from "./components/banner/banner";
import EmployeeTable from "./components/employeeTable/employeeTable";

const Home = () => {
  return (
    <>
      <h3 className="p-0 mt-5">Employees</h3>
      <EmployeeTable />
    </>
  )
}

export default Home;