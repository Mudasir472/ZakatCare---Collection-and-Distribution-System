import React from 'react'
import axios from "axios";
import download from "../../assets/images/download.png"
import approve from "../../assets/images/approve.svg"
import reject from "../../assets/images/reject.svg"

import { useEffect, useState } from "react";

const Reciever = () => {
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [approved, setApproved] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");


    const handleStatusChange = async (userId, status) => {
        try {
            if (status === 'Approved') {
                setApproved(true)
            }
            if (status === 'Rejected') {
                setRejected(true)
            }
            await axios.post(`${import.meta.env.VITE_LOCAL_HOST}/zakatcare/update-status`, {
                id: userId,
                status
            });

            setData((prevData) =>
                prevData.map((user) =>
                    user._id === userId ? { ...user, status } : user
                )
            );
        } catch (error) {
            console.error(`Error updating status to ${status}:`, error);
        }
    };
    useEffect(() => {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
        const fetchContactData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_LOCAL_HOST}/zakatcare/recieve-details`);
                setData(response.data?.recieverData);
            } catch (error) {
                console.error("Error fetching recieverData data:", error);
            }
        };

        // Call the async function
        fetchContactData();
    }, []);

    // Filtered data based on the search term
    const filteredData = data.filter((product) =>
        product.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    }

    return (
        <div className="contactList">
            <div className="contactListMain">
                <div style={{ marginBottom: "11px", height: "4rem" }} className="contactListHead w-1/2 flex items-center justify-between">
                    <h4>Reciever Details</h4>

                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border w-1/2 border-gray-300 rounded "
                    />
                </div>
                <div className="allLists">
                    <div className="product-details mt-2">
                        <div className="grid grid-cols-4 gap-4  border-gray-300 mt-3">
                            {/* Header */}
                            <div className="font-bold">Name</div>
                            <div className="font-bold">Email</div>
                            <div className="font-bold">Files</div>
                            <div className="font-bold">Status</div>
                            {/* Product Rows */}
                            {filteredData.length > 0 ? (
                                filteredData.map((product, index) => (
                                    <React.Fragment key={index}>
                                        <div style={{ cursor: 'pointer' }} onClick={() => handleDetails(product)} className="link-underline-primary border-b border-gray-300 p-2" data-bs-toggle="modal" data-bs-target="#detailsModal">{product.fullname}</div>
                                        <div className="border-b border-gray-300 p-2">{product.email}</div>
                                        <div className="border-b border-gray-300 p-2">{product.aadhar}</div>
                                        <div className="border-b border-gray-300 p-2 flex items-center justify-between status">
                                            {product.status === 'Approved' ? (
                                                <><p className='alert alert-success'>Approved</p></>
                                            ) : product.status === 'Rejected' ? (
                                                <><p className='alert alert-danger'>Rejected</p></>

                                            ) : (
                                                <>
                                                    <p className='cursor-pointer' title="Approve" onClick={() => handleStatusChange(product._id, 'Approved')}>
                                                        <img src={approve} alt="Approve" />
                                                    </p>
                                                    <p className='cursor-pointer' title="Reject" onClick={() => handleStatusChange(product._id, 'Rejected')}>
                                                        <img src={reject} alt="Reject" />
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </React.Fragment>
                                ))
                            ) : (
                                <div className="border-b border-gray-300 p-2 text-gray-500">No results found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for User Details */}
            {isModalOpen && (
                <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
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
                                            <strong>Aadhar Number:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.aadhar}
                                        </div>
                                        <div className="p-2">
                                            <strong>Aadhar photo:</strong>
                                        </div>

                                        <div className="p-2">
                                            <a href={selectedUser.uploadAdhaar} download={selectedUser.uploadAdhaar} >
                                                <img
                                                    src={download}
                                                    alt="Download Aadhar"
                                                    style={{ width: '24px', cursor: 'pointer' }}
                                                />
                                            </a>
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
                                            <strong>City:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.city}{" " + selectedUser.pincode}
                                        </div>

                                        <div className="p-2">
                                            <strong>Category:</strong>
                                        </div>
                                        <div className="p-2">
                                            {selectedUser.category}
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

export default Reciever