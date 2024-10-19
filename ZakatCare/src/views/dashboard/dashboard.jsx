import donor from "../../NewImages/donor.png";
import donate from "../../NewImages/donate.png";
import reciever from "../../NewImages/reciever.png";
import dashUser1 from "../../NewImages/dashUser1.png";
import graph from "../../NewImages/saleGraph.png";

import React from 'react';
import DashTotal from './DashTotal';

const products = [
  { name: "Smartwatch", location: "New York, USA", price: "$150", amount: 5, status: "Delivered" },
  { name: "Wireless Earbuds", location: "London, UK", price: "$80", amount: 10, status: "Undelivered" },
  { name: "Laptop", location: "Hyderabad, India", price: "$900", amount: 3, status: "Delivered" },
  // More products can be added here
];

const Dashboard = () => {
  return (
    <>
      <div className="dashboard container">
        <div className="dashboard-main flex flex-column items-start justify-evenly">
          <h3>Dashboard</h3>
          <div className="dashboard-total flex items-center justify-between">
            <DashTotal head="Total Users" desc="190" img={dashUser1} />
            <DashTotal head="Total Donation" desc="34,809" img={donate} />
            <DashTotal head="Total Donors" desc="120" img={donor} />
            <DashTotal head="Total Recievers" desc="56" img={reciever} />
          </div>
          <div className="details">
            <img src={graph} alt="" />
          </div>
          {/* Dynamic Product Details Grid */}
          <div className="product-details mt-2">
            <h4 className="mb-4">Product Details</h4>
            <div className="grid grid-cols-5 gap-4  border-gray-300 mt-3">
              {/* Header */}
              <div className="font-bold">Product Name</div>
              <div className="font-bold">Location</div>
              <div className="font-bold">Price</div>
              <div className="font-bold">Amount</div>
              <div className="font-bold">Status</div>
              {/* Product Rows */}
              {products.map((product, index) => (
                <React.Fragment key={index}>
                  <div className="border-b border-gray-300 p-2">{product.name}</div>
                  <div className="border-b border-gray-300 p-2">{product.location}</div>
                  <div className="border-b border-gray-300 p-2">{product.price}</div>
                  <div className="border-b border-gray-300 p-2">{product.amount}</div>
                  <div className="border-b border-gray-300 p-2">{product.status}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
