import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./EmployeesList"

/* State is stored directly in the application file */
/* const [customers, assignCustomers] is called a deconstruction array */
export const Repairs = () => {
    /* assignCustomers holds an array of the assigned customers a dependancy/subset of customers. i.e. this is your state variable */


/* JSX, returns whatever HTML code you want rendered to the DOM */
    return (
        <>
        <h1>Honey Rae's Repairs</h1>
        <h2>Customer List</h2>
        <CustomerList />
        <h2>Employee List</h2>
        <EmployeeList />
        </>
    )
}
