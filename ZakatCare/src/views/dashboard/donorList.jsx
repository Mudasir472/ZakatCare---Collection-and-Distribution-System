import React from 'react'
import axios from "axios";
import URL from "../../../env"
import { useEffect, useState } from "react";

const DonorList = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(`${URL}/zakatcare/donations`);
        setData(response.data?.allDonations);
        console.log(response.data?.allDonations)
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
        <h3>All Donors</h3>
        <div className="allLists">
          <div className="product-details mt-2">
            <h4 className="mb-4">Donor Details</h4>
            <div className="grid grid-cols-4 gap-4  border-gray-300 mt-3">
              {/* Header */}
              <div className="font-bold">Name</div>
              <div className="font-bold">Email</div>
              <div className="font-bold">Amount(&#8377;)</div>
              <div className="font-bold">Category</div>
              {/* Product Rows */}
              {data.map((product, index) => (
                <React.Fragment key={index}>
                  <div className="border-b border-gray-300 p-2">{product.firstname}</div>
                  <div className="border-b border-gray-300 p-2">{product.email}</div>
                  <div className="border-b border-gray-300 p-2">{product.amount}</div>
                  <div className="border-b border-gray-300 p-2"><span>{product.category}</span></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonorList