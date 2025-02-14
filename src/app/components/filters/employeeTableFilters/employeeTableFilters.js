import { useState } from "react";
import DoubleFilter from "../doubleFilter/doubleFilter";
import SingleFilter from "../singleFilter/singleFilter";

const EmployeeTableFilters = () => {
    const [filtersShown, setFiltersShown] = useState(false);
    const [filters, setFilters] = useState({
        idFilter: "",
        firstNameFilter: "",
        lastNameFilter: "",
        positionFilter: "",
        officeFilter: "",
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

    const handleIdFilterUpdate = (filter) => {
        console.log(filter);
    }

    const handleFirstNameFilterUpdate = (filter) => {
        console.log(filter);
    }

    const handleLastNameFilterUpdate = (filter) => {
        console.log(filter);
    }

    const handlePositionFilterUpdate = (filter) => {
        console.log(filter);
    }

    const handleOfficeFilterUpdate = (filter) => {
        console.log(filter);
    }

    const handleAgeFilterUpdate = (filter) => {
        console.log(filter);
    }
    
    const handleSalaryFilterUpdate = (filter) => {
        console.log(filter);
    }

    const handleStartDateFilterUpdate= (filter) => {
        console.log(filter);
    }

    return (
        <div className="container border border-1 rounded">
            <div className="row bg-secondary rounded">
                <h5 className="col-6 d-flex align-items-center justify-content-start text-light">
                    Employee Table
                </h5>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <button className="btn btn-transparent text-light" onClick={() => setFiltersShown(!filtersShown)}>Filters (0 Active)</button>
                </div>
            </div>

            <div className={`row ${filtersShown ? "" : "d-none"}`}>
                <div className="container">
                    <div className="row pt-1 pb-1 align-items-center border-bottom">
                        <div className="col-6 border-end">
                            <SingleFilter type="number" step={1} min={0} update={handleIdFilterUpdate}>Id</SingleFilter>
                        </div>

                        <div className="col-6 ">
                            <SingleFilter type="number" step={1} min={0} update={handleAgeFilterUpdate}>Age</SingleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center border-bottom">
                        <div className="col-6 border-end">
                            <SingleFilter type="text" update={handleFirstNameFilterUpdate}>First Name</SingleFilter>
                        </div>

                        <div className="col-6 ">
                            <SingleFilter type="text" update={handleLastNameFilterUpdate}>Last Name</SingleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center border-bottom">
                        <div className="col-6 border-end">
                            <SingleFilter type="text" update={handlePositionFilterUpdate}>Position</SingleFilter>
                        </div>

                        <div className="col-6 ">
                            <SingleFilter type="text" update={handleOfficeFilterUpdate}>Office</SingleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center">
                        <div className="col-6 border-end">
                            <DoubleFilter type="date" min="2024-01-01" update={handleStartDateFilterUpdate}>Start Date</DoubleFilter>
                        </div>
                        <div className="col-6">
                            <DoubleFilter type="number" step={.01} min={0} update={handleSalaryFilterUpdate}>Salary</DoubleFilter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeTableFilters;