import { useState, useEffect, act } from "react";
import DoubleFilter from "../doubleFilter/doubleFilter";
import SingleFilter from "../singleFilter/singleFilter";

const EmployeeTableFilters = ({filters, handleFiltersUpdate}) => {
    const [filtersShown, setFiltersShown] = useState(false);
    const [activeFiltersCount, setActiveFiltersCount] = useState(0);

    const handleIdFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.idFilter = filter;
        handleFiltersUpdate(filtersCopy);
    }

    const handleFirstNameFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.firstNameFilter = filter;
        handleFiltersUpdate(filtersCopy);
    }

    const handleLastNameFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.lastNameFilter = filter;
        handleFiltersUpdate(filtersCopy); 
    }

    const handlePositionFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.positionFilter = filter;
        handleFiltersUpdate(filtersCopy); 
    }

    const handleOfficeFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.officeFilter = filter;
        handleFiltersUpdate(filtersCopy); 
    }

    const handleAgeFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.ageFilter = filter;
        handleFiltersUpdate(filtersCopy); 
    }
    
    const handleSalaryFilterUpdate = (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.salaryFilter = filter;
        handleFiltersUpdate(filtersCopy); 
    }

    const handleStartDateFilterUpdate= (filter) => {
        var filtersCopy = JSON.parse(JSON.stringify(filters));
        filtersCopy.startDateFilter = filter;
        handleFiltersUpdate(filtersCopy); 
    }

    const handleClearAllFilters = () => {
        handleFiltersUpdate({
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
    }

    useEffect(() => {
        var count = 0;
        if (filters.idFilter != "") count++
        if (filters.firstNameFilter != "") count++;
        if (filters.lastNameFilter != "") count++;
        if (filters.positionFilter != "") count++;
        if (filters.officeFilter != "") count++;
        if (filters.ageFilter != "") count++;
        if ((filters.salaryFilter.mode == 0 && filters.salaryFilter.specific != "") 
            || (filters.salaryFilter.mode == 1 && (filters.salaryFilter.lower != "" || filters.salaryFilter.upper != ""))) count++;
        if ((filters.startDateFilter.mode == 0 && filters.startDateFilter.specific != "") 
            || (filters.startDateFilter.mode == 1 && (filters.startDateFilter.lower != "" || filters.startDateFilter.upper != ""))) count++;

        setActiveFiltersCount(count);
    })

    return (
        <div className="container bg-light">
            <div className="row bg-secondary">
                <h5 className="col-6 d-flex align-items-center justify-content-start text-light">
                </h5>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <button className="btn btn-transparent text-light" onClick={() => setFiltersShown(!filtersShown)}>
                        {filtersShown ? "Hide Filters" : "Show Filters"}
                        {` (${activeFiltersCount} active)`}
                    </button>
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

                    <div className="row pt-1 pb-1 align-items-center border-bottom">
                        <div className="col-6 border-end">
                            <DoubleFilter type="date" min="2000-01-01" filter={filters.startDateFilter} handleUpdateFilter={handleStartDateFilterUpdate}>Start Date</DoubleFilter>
                        </div>
                        <div className="col-6">
                            <DoubleFilter type="number" step={.01} min={0} filter={filters.salaryFilter} handleUpdateFilter={handleSalaryFilterUpdate}>Salary</DoubleFilter>
                        </div>
                    </div>

                    <div className="row pt-1 pb-1 align-items-center">
                        <div className="col-4"></div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button className="btn btn-primary" onClick={handleClearAllFilters}>Clear All Filters</button>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmployeeTableFilters;