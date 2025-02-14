import { useState, useEffect } from "react";

const useEmployees = () => {
    const [employees, setEmployees] = useState([]) // [state, method to change state] = useState(initial state)
    var employeesCopy = [];

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const result = await fetch("api/employees");
                const employees = await result.json();
                employeesCopy = JSON.parse(JSON.stringify(employees));
                console.log(employeesCopy);
                setEmployees(employees);
            }
            catch {

            }
        }

        fetchEmployees();
    }, []);

    console.log(employeesCopy);
    return {employees, setEmployees, employeesCopy};
}

export default useEmployees;