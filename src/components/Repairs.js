import { CustomerList } from "./customers/CustomerList"

/* State is stored directly in the application file */
/* const [customers, assignCustomers] is called a deconstruction array */
export const Repairs = () => {
    /* assignCustomers holds an array of the assigned customers a dependancy/subset of customers. i.e. this is your state variable */


/* JSX, returns whatever HTML code you want rendered to the DOM */
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <CustomerList />

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
