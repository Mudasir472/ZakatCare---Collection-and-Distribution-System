import React from 'react'
import axios from "axios";
import URL from "../../../env"
import { useEffect, useState } from "react";

const ContactLists = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/contact`);
                setData(response.data?.contacts);
            } catch (error) {
                console.error("Error fetching listing data:", error);
            }
        };

        // Call the async function
        fetchContactData();
    }, []);
    return (
        <div className="contactList">
            <div className="contactListMain">
                <h3>All Contacts</h3>
                <div className="allLists">
                    <div className="product-details mt-2">
                        <h4 className="mb-4">Contact Details</h4>
                        <div className="grid grid-cols-4 gap-4  border-gray-300 mt-3">
                            {/* Header */}
                            <div className="font-bold">Name</div>
                            <div className="font-bold">Email</div>
                            <div className="font-bold">Phone</div>
                            <div className="font-bold">Message</div>
                            {/* Product Rows */}
                            {data.map((product, index) => (
                                <React.Fragment key={index}>
                                    <div className="border-b border-gray-300 p-2">{product.name}</div>
                                    <div className="border-b border-gray-300 p-2">{product.email}</div>
                                    <div className="border-b border-gray-300 p-2">{product.phone}</div>
                                    <div className="border-b border-gray-300 p-2"><span>{product.message}</span></div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLists