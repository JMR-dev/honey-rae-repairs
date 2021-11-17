import React from "react"
import {
    useEffect,
    useState
} from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
            () => {
                
                    fetch("http://localhost:8088/employees")
                        /* updates application state from permanent state and converts the result to JSON */
                        .then(res => res.json())
                        /* passes the employees state variable to the .then function as a parameter and then calls that parameter in the assignCustomers function to change application state */
                        .then((employees) => {
                            setEmployees(employees)
                        })
                }, 
                []
            )
                return(
                <> 
                {
            /* .map converting items to convert items from an array to HTML */
            employees.map(
                (employeeObject) => {
                    return <div > <p key = {`customer--${employeeObject.id}`} > {employeeObject.name} </p></div >
                }
            )
        } </> )
}