 
import { useState, useEffect } from "react";
import { Customer } from "../models/Customer";
import { CustomerList } from "./CustomerList";


export const CustomerDetails = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    useEffect(() => {
         fetch("https://dummyjson.com/users")
         .then(response => response.json())
         .then(data => setCustomers(data.users))
         .catch(error => console.error("Error fetching customers:", error));
    }, []);
    return <CustomerList customers={customers} />;
};