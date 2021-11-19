import React, {useEffect, useState} from "react"

export const TicketList = () => {
    const [tickets, setTicketList] = useState([])
    const [totalTicketMessage, updateTotalTicketMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(response => response.json())
                .then((data1) => {
                    setTicketList(data1)
                })

        },
        []
    )

    useEffect(
        () => {
            updateTotalTicketMessage(`You have ${tickets.length} tickets in the queue.`)
        },
        [tickets]
    )

    return ( 
    <>
        <div> <h3>{totalTicketMessage} </h3></div> 
        {
            
    
        tickets.map((ticketObject) => {

                return (
                <div>
                <ul>
                  <li>
                  <p key = {`ticket--${ticketObject.id}`}>
                      Ticket #{ticketObject.id}
                      </p>
                    <p key = {`ticket--${ticketObject.id}`}>
                    Customer Name - {ticketObject.customer.name}
                    </p>
                    <p key = {`ticket--${ticketObject.id}`}>
                        Employee Name - {ticketObject.employee.name}
                    </p>
                <p key = {`ticket--${ticketObject.id}`}>
                    Issue Description - {ticketObject.description}
                </p>
                </li>
                </ul>
                </div>
                )
                }
        )
        
    }



    </>
    )
}