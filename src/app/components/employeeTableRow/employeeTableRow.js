const EmployeeTableRow = ({ employee }) => {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.position}</td>
            <td>{employee.office}</td>
            <td>{employee.age}</td>
            <td>{employee.startDate}</td>
            <td>{employee.salary}</td>
        </tr>
    )
}

export default EmployeeTableRow;