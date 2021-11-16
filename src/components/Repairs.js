/* imports React library */
import React from "react"
import { useEffect, useState } from "react"

/* State is stored directly in the application file */
/* const [customers, assignCustomers] is called a deconstruction array */
export const Repairs = () => {
    /* assignCustomers holds an array of the assigned customers a dependancy/subset of customers. i.e. this is your state variable */
    const [customers, assignCustomers] = useState([])
/* Once the customers array is retrieved, it needs to end up inside of the state variable "customers" */
/* assignCustomers must be invoked to set the value of customers */
/* customerArray => {
    customers = customerArray
}
This is not allowed in React, even if it works in vanilla JS. */
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            /* updates application state from permanent state and converts the result to JSON */
                .then(res => res.json())
                /* passes the customers state variable to the .then function as a parameter and then calls that parameter in the assignCustomers function to change application state */
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
            /* .map converting items to convert items from an array to HTML */
            customers.map(
                (customerObject) => { 
                    return <h2>(customerObject.name)</h2>
                }
            )
        }
        </>
    )
}
