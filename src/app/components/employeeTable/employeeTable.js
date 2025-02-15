"use client"

import { useState, useEffect, useRef } from "react"
import EmployeeTableRow from "../employeeTableRow/employeeTableRow";
import EmployeeTableFilters from "../filters/employeeTableFilters/employeeTableFilters";

import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-fixedheader-bs5';


import styles from './employeeTable.module.css';


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

    const table = useRef();


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

    useEffect(() => {
        table.current.dt().columns('id:name').search(filters.idFilter, { exact: true}).draw();
        table.current.dt().columns('firstName:name').search(filters.firstNameFilter).draw();
        table.current.dt().columns('lastName:name').search(filters.lastNameFilter).draw();
        table.current.dt().columns('position:name').search(filters.positionFilter).draw();
        table.current.dt().columns('office:name').search(filters.officeFilter).draw();
        table.current.dt().columns('age:name').search(filters.ageFilter, { exact: true }).draw();
        table.current.dt().columns('startDate:name').search((d) => {
            if (filters.startDateFilter.mode == 0) {
                if (filters.startDateFilter.specific == "") return true;
                else return d == filters.startDateFilter.specific
            }
            else {
                if (filters.startDateFilter.lower == "" && filters.startDateFilter.upper == "") return true;
                else if (filters.startDateFilter.lower == "") return d <= filters.startDateFilter.upper;
                else if (filters.startDateFilter.upper == "") return d >= filters.startDateFilter.lower;
                else return d >= filters.startDateFilter.lower && d <= filters.startDateFilter.upper;
            }
        }).draw();
        table.current.dt().columns('salary:name').search((s) => {
            if (filters.salaryFilter.mode == 0) {
                if (filters.salaryFilter.specific == "") return true;
                else return s == filters.salaryFilter.specific
            }
            else {
                if (filters.salaryFilter.lower == "" && filters.salaryFilter.upper == "") return true;
                else if (filters.salaryFilter.lower == "") return s <= parseFloat(filters.salaryFilter.upper);
                else if (filters.salaryFilter.upper == "") return s >= parseFloat(filters.salaryFilter.lower);
                else return s >= parseFloat(filters.salaryFilter.lower) && s <= parseFloat(filters.salaryFilter.upper);
            }
        }).draw();
    })

    const handleFiltersUpdate = (filtersUpdate) => {
        setFilters(filtersUpdate);
    }

    const columns = [
        {data: 'id', title: 'Id', name: 'id', render:DT.render.text(), width: '5%', className: 'dt-end text-end' },
        {data: 'firstName', title: 'First Name', name: 'firstName', render:DT.render.text(), width: '15%', className: 'dt-start text-start'  },
        {data: 'lastName', title: 'Last Name', name: 'lastName', render:DT.render.text(), width: '15%', className: 'dt-start text-start'  },
        {data: 'position', title: 'Position', name: 'position', render:DT.render.text(), width: '20%', className: 'dt-start text-start'  },
        {data: 'office', title: 'Office', name: 'office', render:DT.render.text(), width: '15%', className: 'dt-start text-start'  },
        {data: 'age', title: 'Age', name: 'age', render:DT.render.number('', '', 0), width: '5%', className: 'dt-end text-end'  },
        {data: 'startDate', title: 'Start Date', name: 'startDate', render:DT.render.date(), width: '10%', className: 'dt-start text-start'  },
        {data: 'salary', title: 'Salary', name: 'salary', render:DT.render.number(',', '.', 2, '$'), width: '15%', className: 'dt-end text-end'  }
    ]

    return (
        <div className="container border border-1">
            <div className="row border-bottom">
                <EmployeeTableFilters filters={filters} handleFiltersUpdate={handleFiltersUpdate}/>
            </div>
            <div className="row">
                <DataTable 
                    ref={table}
                    columns={columns} 
                    data={employees} 
                    className={`table table-striped table-sm ${styles.fixedTable}`}
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
            </div>
        </div>

    )
}

export default EmployeeTable;