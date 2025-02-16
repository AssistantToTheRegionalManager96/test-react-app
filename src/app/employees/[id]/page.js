"use client"
import EmployeeDetails from '@/app/components/employeeDetails/employeeDetails'
import { useParams } from 'next/navigation'

const Home = () => {
    var params = useParams()

    return (
        <EmployeeDetails id={params.id} />
    )
}

export default Home;