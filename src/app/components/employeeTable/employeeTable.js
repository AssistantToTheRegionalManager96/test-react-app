"use client"

import { useState, useEffect } from "react"
import EmployeeTableRow from "../employeeTableRow/employeeTableRow";
import EmployeeTableFilters from "../filters/employeeTableFilters/employeeTableFilters";

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]) // [state, method to change state] = useState(initial state)
    const [filters, setFilters] = useState({
        idFilter: "",
        firstNameFilter: "",
        lastNameFilter: "",
        positionFilter: "",
        officeFilter: "",
        ageFilter: "",
        startDateFilter: {
            mode: 0,
            specific: "",
            lower: "",
            upper: ""
        },
        salaryFilter: {
            mode: 0,
            specific: "",
            lower: "",
            upper: ""
        }
    })


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

    const handleFiltersUpdate = (filtersUpdate) => {
        setFilters(filtersUpdate);
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <EmployeeTableFilters filters={filters} handleFiltersUpdate={handleFiltersUpdate}/>
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