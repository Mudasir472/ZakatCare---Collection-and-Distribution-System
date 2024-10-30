import React from 'react'
import axios from "axios";
import URL from "../../../env"
import approve from "../../assets/images/approve.svg"

import { useEffect, useState } from "react";

const Approve = () => {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(false)

    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/recieve-details`);
                const approvedData = response.data?.recieverData?.filter(item => item.status === 'Approved');

                setData(approvedData);
                // console.log(response.data?.recieverData)
            } catch (error) {
                console.error("Error fetching listing data:", error);
            }
        };

        // Call the async function
        fetchContactData();
    }, []);
    const handleDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const handleStatusChange = async (userId, paymentStatus) => {
        try {
            if (paymentStatus === 'Done') {
                setDone(true)
            }
            await axios.post(`${URL}/zakatcare/payment-status`, {
                id: userId,
                paymentStatus
            });

            setData((prevData) =>
                prevData.map((user) =>
                    user._id === userId ? { ...user, paymentStatus } : user
                )
            );
        } catch (error) {
            console.error(`Error updating status to ${paymentStatus}:`, error);
        }
    };

    return (
        <div className="contactList">
            <div className="contactListMain">
                <h3>Payment Approve List</h3>
                <div className="allLists">
                    <div className="product-details mt-2">
                        <div className="grid grid-cols-4 gap-4  border-gray-300 mt-3">
                            {/* Header */}
                            <div className="font-bold">Name</div>
                            <div className="font-bold">Email</div>
                            <div className="font-bold">State</div>
                            <div className="font-bold">Payment Status</div>
                            {/* Product Rows */}
                            {data.map((product, index) => (
                                <React.Fragment key={index}>
                                    <div style={{ cursor: 'pointer' }} onClick={() => handleDetails(product)} className="link-underline-primary border-b border-gray-300 p-2" data-bs-toggle="modal" data-bs-target="#detailsModal">{product.fullname}</div>
                                    <div className="border-b border-gray-300 p-2">{product.email}</div>
                                    <div className="border-b border-gray-300 p-2">{product.state}</div>
                                    <div className="border-b border-gray-300 p-2 flex items-center justify-between status changeWidth">
                                        {product.paymentStatus === 'Done' ? (
                                            <><p className='alert alert-success'>Payment Done</p></>
                                        ) : (
                                            <>
                                                <p className='cursor-pointer' title="Approve" onClick={() => handleStatusChange(product._id, 'Done')}>
                                                    <img src={approve} alt="Approve" />
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal for User Details */}
            {isModalOpen && (
                <div class="modal fade" id="detailsModal" aria-labelledby="detailsModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="detailsModalLabel">All Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {selectedUser && (
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="p-2">
                                            <strong>Name:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.fullname}
                                        </div>
                                        <div className="p-2">
                                            <strong>Email:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.email}
                                        </div>

                                        <div className="p-2">
                                            <strong>Address:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.address}
                                        </div>
                                        <div className="p-2">
                                            <strong>State:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.state}
                                        </div>

                                        <div className="p-2">
                                            <strong>Category:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.category}
                                        </div>
                                        <div className="p-2">
                                            <strong>Name as per Bank:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.bankOwner}
                                        </div>
                                        <div className="p-2">
                                            <strong>Account Number:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.account}
                                        </div>
                                        <div className="p-2">
                                            <strong>Bank Name:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.bankName}
                                        </div>
                                        <div className="p-2">
                                            <strong>Branch:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.branch}
                                        </div>
                                        <div className="p-2">
                                            <strong>IFSC code:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.ifsc}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Approve