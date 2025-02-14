"use client"

import { useState, useEffect } from "react"
import EmployeeTableRow from "../employeeTableRow/employeeTableRow";
import EmployeeTableFilters from "../filters/employeeTableFilters/employeeTableFilters";

import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';

import './employeeTable.module.css';


const EmployeeTable = () => {
    DataTable.use(DT);

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

    const columns = [
        {data: 'id', title: 'Id', name: 'id', render:DT.render.text() },
        {data: 'firstName', title: 'First Name', name: 'firstName', render:DT.render.text() },
        {data: 'lastName', title: 'Last Name', name: 'lastName', render:DT.render.text() },
        {data: 'position', title: 'Position', name: 'position', render:DT.render.text() },
        {data: 'office', title: 'Office', name: 'office', render:DT.render.text() },
        {data: 'age', title: 'Age', name: 'age', render:DT.render.number('', '', 0) },
        {data: 'startDate', title: 'Start Date', name: 'startDate', render:DT.render.date() },
        {data: 'salary', title: 'Salary', name: 'salary', render:DT.render.number(',', '.', 2, '$') }
    ]

    return (
        <div className="container border border-1">
            <div className="row">
                <EmployeeTableFilters filters={filters} handleFiltersUpdate={handleFiltersUpdate}/>
            </div>
            <div className="row">
                <DataTable 
                    columns={columns} 
                    data={employees} 
                    className="table table-striped table-sm"
                    options={{
                        paging: true,
                        pageLength: 10,
                        layout: {
                            topStart: '',
                            topEnd: '',
                            bottomStart: 'info',
                            bottomEnd: 'paging'
                        }
                    }}>
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
                </DataTable>
                {/* <table className="table table-striped">
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
                </table> */}
            </div>
        </div>

    )
}

export default EmployeeTable;