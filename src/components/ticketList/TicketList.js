import React, {useEffect, useState} from "react"

export const TicketList = () => {
    const [tickets, setTicketList] = useState([])
    const [totalTicketMessage, updateTotalTicketMessage] = useState("")

    useEffect(
        () => {
            fetch("http:localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(response => response.json())
                .then((data1) => {
                    setTicketList(data1)
                })

        },
        []
    )

    useEffect(
        () => {
            updateTotalTicketMessage(`You have ${tickets.length} tickets in the backlog.`)
        },
        [tickets]
    )

    return ( 
    <>
        <div> {totalTicketMessage} </div> 
        {
            
    
        tickets.map((ticketObject) => {

                return (
                <div>
                <p key = {`ticket--${ticketObject.id}`}>
                    <ul>
                    <li>
                    {ticketObject.description}
                    </li>
                </ul> 
                </p>
                </div>
                )
                }
        )
        
    }



        </>
    )
}