import React from 'react'
import axios from "axios";
import download from "../../assets/images/download.png"
import URL from "../../../env"
import { useEffect, useState } from "react";

const Reciever = () => {

    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/recieve-details`);
                setData(response.data?.recieverData);
                console.log(response.data?.recieverData)
            } catch (error) {
                console.error("Error fetching recieverData data:", error);
            }
        };

        // Call the async function
        fetchContactData();
    }, []);

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
                <h3>All Contacts</h3>
                <div className="allLists">
                    <div className="product-details mt-2">
                        <h4 className="mb-4">Reciever Details</h4>
                        <div className="grid grid-cols-4 gap-4  border-gray-300 mt-3">
                            {/* Header */}
                            <div className="font-bold">Name</div>
                            <div className="font-bold">Email</div>
                            <div className="font-bold">Files</div>
                            <div className="font-bold">Status</div>
                            {/* Product Rows */}
                            {data.map((product, index) => (
                                <React.Fragment key={index}>
                                    <div style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleDetails(product)} className="link-underline-primary border-b border-gray-300 p-2" data-bs-toggle="modal" data-bs-target="#detailsModal">{product.fullname}</div>
                                    <div className="border-b border-gray-300 p-2">{product.email}</div>
                                    <div className="border-b border-gray-300 p-2">{product.aadhar}</div>
                                    <div className="border-b border-gray-300 p-2"><span>{product.category}</span></div>
                                </React.Fragment>
                            ))}
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


                                        {/* Add any other details you want to display here */}
                                    </div>
                                )}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Reciever