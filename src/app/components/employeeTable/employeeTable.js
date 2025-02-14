"use client"

import { useState, useEffect } from "react"
import EmployeeTableRow from "../employeeTableRow/employeeTableRow";
import EmployeeTableFilters from "../filters/employeeTableFilters/employeeTableFilters";

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]) // [state, method to change state] = useState(initial state)
    const [employeesFilteredById, setEmployeesFilteredById] = useState([])


    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const result = await fetch("api/employees");
                const employees = await result.json();
                setEmployees(employees);
            }
            catch {

            }
        }

        fetchEmployees();
    }, []);

    const filterId = (id) => {
        var tableFiltered = employees.filter(x => x.id == id);
        console.log(tableFiltered);

        setEmployeesFilteredById(tableFiltered);
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <EmployeeTableFilters filterId = {filterId}/>
            </div>
            <div className="row mt-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start Date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(e => <EmployeeTableRow key={e.id} employee={e} />)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default EmployeeTable;