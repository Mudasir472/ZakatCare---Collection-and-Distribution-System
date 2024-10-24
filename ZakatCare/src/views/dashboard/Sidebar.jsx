import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-main">
                    <nav>
                        <ul className="sidebar-lists flex flex-column items-start justify-evenly text-dark">
                            <Link to="">
                                <li
                                    className={`flex items-center justify-evenly ${selectedItem === 0 ? 'bg-color-sidebar color-white' : ''}`}
                                    onClick={() => handleItemClick(0)}
                                >
                                    <span><i className="bi bi-speedometer"></i></span>
                                    Dashboard
                                </li>
                            </Link>
                            <Link to="donor-list">
                                <li
                                    className={`flex items-center justify-evenly ${selectedItem === 4 ? 'bg-color-sidebar color-white' : ''}`}
                                    onClick={() => handleItemClick(4)}
                                >
                                    <span><i className="bi bi-card-checklist"></i></span>
                                    Donor-List
                                </li>
                            </Link>
                            <Link to="contact-list">
                                <li
                                    className={`flex items-center justify-evenly ${selectedItem === 1 ? 'bg-color-sidebar color-white' : ''}`}
                                    onClick={() => handleItemClick(1)}
                                >
                                    <span><i className="bi bi-check-square"></i></span>
                                    Contact-List
                                </li>
                            </Link>
                            <Link to="reciever-list">
                                <li
                                    className={`flex items-center justify-evenly ${selectedItem === 2 ? 'bg-color-sidebar color-white' : ''}`}
                                    onClick={() => handleItemClick(2)}
                                >
                                    <span><i className="bi bi-heart"></i></span>
                                    Reciever-list
                                </li>
                            </Link>
                            <Link to="messages">
                                <li
                                    className={`flex items-center justify-evenly ${selectedItem === 3 ? 'bg-color-sidebar color-white' : ''}`}
                                    onClick={() => handleItemClick(3)}
                                >
                                    <span><i className="bi bi-chat-dots"></i></span>
                                    Messages
                                </li>
                            </Link>

                        </ul>
                    </nav>
                </div>


            </div>
        </>
    );
}

export default Sidebar;
