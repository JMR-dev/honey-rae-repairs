/* import { useEffect, useState } from "react"


export const CustomerList = () => {
/* imports React library */

    /* assignCustomers holds an array of the assigned customers a dependancy/subset of customers. i.e. this is your state variable */
    /* State is stored directly in the application file */
/* const [customers, assignCustomers] is called a deconstruction array */
/*    const [customers, setCustomers] = useState([])
/* Once the customers array is retrieved, it needs to end up inside of the state variable "customers" */
/* assignCustomers must be invoked to set the value of customers */
/* customerArray => {
    customers = customerArray
}
This is not allowed in React, even if it works in vanilla JS. */
/*    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            /* updates application state from permanent state and converts the result to JSON */
  /*              .then(res => res.json())
                /* passes the customers state variable to the .then function as a parameter and then calls that parameter in the assignCustomers function to change application state */
//                .then((customers) => { 
  //                  setCustomers(customers) }
/*                )
    },
        []
    ) 
/* JSX, returns whatever HTML code you want rendered to the DOM */
 /*   return (
        <>

        {
            /* .map converting items to convert items from an array to HTML */
 /*           customers.map(
                (customerObject) => { 
                    return <div><p key={`customer--${customerObject.id}`}>{customerObject.name}</p></div>
                }
            )
        }
        </>
    )
} 
 */


import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    // useEffect runs when the state is set by setting it to an empty array
    const [customers, setCustomers] = useState([])
    // totalCustomerMessage is the state variable holding an array of all the customers
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )
// This useEffect runs only when the state of customers changes
    useEffect(
        () => {
            updateMessage(`You have ${customers.length} customers.`)
        },
        [customers]
    )

    return (
        <>
        <div>{totalCustomerMessage}</div>
            {
                customers.slice(0,5).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}
