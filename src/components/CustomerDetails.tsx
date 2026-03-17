 
import { useState, useEffect } from "react";
import { Customer } from "../models/Customer";
import { CustomerList } from "./CustomerList";


export const CustomerDetails = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    useEffect(() => {
        setCustomers([
            { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "1234567890", address: "123 Main St", city: "Anytown", state: "CA", zip: "12345" },
            { id: 2, name: "Jane Doe", email: "jane.doe@example.com", phone: "0987654321", address: "456 Main St", city: "Anytown", state: "CA", zip: "12345" },
        ]);
    }, []);
    return (
        <div>
            <p>Customer Component</p>
            <CustomerList customers={customers} />
        </div>
    );
};