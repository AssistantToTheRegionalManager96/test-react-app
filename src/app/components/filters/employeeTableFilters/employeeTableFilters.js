import { useState } from "react";
import DoubleFilter from "../doubleFilter/doubleFilter";
import SingleFilter from "../singleFilter/singleFilter";

const EmployeeTableFilters = ({filters, handleFiltersUpdate}) => {
    const [filtersShown, setFiltersShown] = useState(false);

    const handleIdFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filters.positionFilter,
            officeFilter: filters.officeFilter,
            ageFilter: filters.ageFilter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        })
    }

    const handleFirstNameFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filters.positionFilter,
            officeFilter: filters.officeFilter,
            ageFilter: filters.ageFilter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        })
    }

    const handleLastNameFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filter,
            positionFilter: filters.positionFilter,
            officeFilter: filters.officeFilter,
            ageFilter: filters.ageFilter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        })    
    }

    const handlePositionFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filter,
            officeFilter: filters.officeFilter,
            ageFilter: filters.ageFilter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        })  
    }

    const handleOfficeFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filters.positionFilter,
            officeFilter: filter,
            ageFilter: filters.ageFilter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        }) 
    }

    const handleAgeFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filters.positionFilter,
            officeFilter: filters.officeFilter,
            ageFilter: filter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        }) 
    }
    
    const handleSalaryFilterUpdate = (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filters.positionFilter,
            officeFilter: filters.officeFilter,
            ageFilter: filters.ageFilter,
            startDateFilter: {
                mode: filters.startDateFilter.mode,
                specific: filters.startDateFilter.specific,
                lower: filters.startDateFilter.lower,
                upper: filters.startDateFilter.upper
            },
            salaryFilter: {
                mode: filter.mode,
                specific: filter.specific,
                lower: filter.lower,
                upper: filter.upper
            }
        }) 
    }

    const handleStartDateFilterUpdate= (filter) => {
        handleFiltersUpdate({
            idFilter: filters.idFilter,
            firstNameFilter: filters.firstNameFilter,
            lastNameFilter: filters.lastNameFilter,
            positionFilter: filters.positionFilter,
            officeFilter: filters.officeFilter,
            startDateFilter: {
                mode: filter.mode,
                specific: filter.specific,
                lower: filter.lower,
                upper: filter.upper
            },
            salaryFilter: {
                mode: filters.salaryFilter.mode,
                specific: filters.salaryFilter.specific,
                lower: filters.salaryFilter.lower,
                upper: filters.salaryFilter.upper
            }
        }) 
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
                            <SingleFilter type="number" step={1} min={0} filter={filters.idFilter} handleUpdateFilter={handleIdFilterUpdate}>Id</SingleFilter>
                        </div>

                        <div className="col-6 ">
                            <SingleFilter type="number" step={1} min={0} filter={filters.ageFilter} handleUpdateFilter={handleAgeFilterUpdate}>Age</SingleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center border-bottom">
                        <div className="col-6 border-end">
                            <SingleFilter type="text" filter={filters.firstNameFilter} handleUpdateFilter={handleFirstNameFilterUpdate}>First Name</SingleFilter>
                        </div>

                        <div className="col-6 ">
                            <SingleFilter type="text" filter={filters.lastNameFilter} handleUpdateFilter={handleLastNameFilterUpdate}>Last Name</SingleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center border-bottom">
                        <div className="col-6 border-end">
                            <SingleFilter type="text" filter={filters.positionFilter} handleUpdateFilter={handlePositionFilterUpdate}>Position</SingleFilter>
                        </div>

                        <div className="col-6 ">
                            <SingleFilter type="text" filter={filters.officeFilter} handleUpdateFilter={handleOfficeFilterUpdate}>Office</SingleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center">
                        <div className="col-6 border-end">
                            <DoubleFilter type="date" min="2024-01-01" filter={filters.startDateFilter} handleUpdateFilter={handleStartDateFilterUpdate}>Start Date</DoubleFilter>
                        </div>
                        <div className="col-6">
                            <DoubleFilter type="number" step={.01} min={0} filter={filters.salaryFilter} handleUpdateFilter={handleSalaryFilterUpdate}>Salary</DoubleFilter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeTableFilters;