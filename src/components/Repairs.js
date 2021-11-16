/* imports React library */
import React from "react"
import { useEffect, useState } from "react"

/* State is stored directly in the application file */
/* const [customers, assignCustomers] is called a deconstruction array */
export const Repairs = () => {
    /* assignCustomers holds an array of the assigned customers a dependancy/subset of customers. i.e. this is your state variable */
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customers) => { 
                    assignCustomers(customers) }
                )
    },
        []
    )
/* JSX, returns whatever HTML code you want rendered to the DOM */
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>

        {
            customers.map(
                (customerObject) => { 
                    return <h2>(customerObject.name)</h2>
                }
            )
        }
        </>
    )
}
