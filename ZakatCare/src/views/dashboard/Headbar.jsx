import React, { useEffect, useState } from 'react';
import axios from 'axios';
import URL from '../../../env';
import logo from '/Logo.png';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

function Headbar() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/profile`, { withCredentials: true });
                setData(response.data?.data);
            } catch (error) {
                console.error('Error fetching listing data:', error);
            }
        };
        fetchUserData();
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionClick = (option) => {
        if (option === 'profile') {
            window.location.href = '/zakatcare/userprofile';
        } else if (option === 'logout') {
            handleLogout();
        }
        setDropdownVisible(false); // Close the dropdown after selection
    };

    const handleLogout = () => {
        navigate("/zakatcare/logout");
        // window.location.href = '/zakatcare/login';
    };
    console.log(data)
    return (
        <>
            <div className="headbar">
                <div className="headbar-main container">
                    <nav className="flex items-center justify-between">
                        <img className="admin-logo" src={logo} alt="Logo" />
                        <div className="admin flex items-center justify-between">
                            <img src={data.image?.url} alt="User" />
                            <div className="adminBdy flex flex-column items-start justify-center">
                                <h4>{data.username}</h4>
                                <p>{data.role}</p>
                            </div>
                            <span
                                className="flex items-center justify-center dropdown-toggle"
                                onClick={toggleDropdown}
                            >
                                {/* <i className="bi bi-chevron-down"></i> */}
                            </span>
                            {/* Dropdown Menu */}
                            {dropdownVisible && (
                                <div className="dropdown-menuu">
                                    <div
                                        className="dropdown-items"
                                        onClick={() => handleOptionClick('profile')}
                                    >
                                        Profile
                                    </div>
                                    <div
                                        className="dropdown-items"
                                        onClick={() => handleOptionClick('logout')}
                                    >
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Headbar;
