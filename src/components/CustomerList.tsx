import { Customer } from "../models/Customer";


export const CustomerList = ({ customers }: { customers: Customer[] }) => {
    return (
        <div>
           
            {customers.map((customer) => (
                <div key={customer.id}>
                    <p>{customer.firstName} {customer.lastName}</p>
                </div>
            ))}
        </div>
    );
};