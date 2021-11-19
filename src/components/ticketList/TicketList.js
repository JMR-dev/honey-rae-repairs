import React, {
    useEffect,
    useState
} from "react"

export const TicketList = () => {
    const [tickets, setTicketList] = useState([])
    const [totalTicketMessage, updateTotalTicketMessage] = useState("")

    useEffect(
        () => {
            fetch("http:localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((data) => {
                    setTicketList(data)
                })

        },
        []
    )

    useEffect(
        () => {
            updateTotalTicketMessage(`You have ${tickets.length} customers.`)
        },
        [tickets]
    )

    return ( 
    <>
        <
        div > {
            totalTicketMessage
        } </div> {
        tickets.map(
            (ticketObject) => {
                return <p key = {`ticket--${ticketObject.id}`}>
                    <ul > {ticketObject.description} 
                </ul> </p>
                }
        )
        
    }



        </>
    )
}