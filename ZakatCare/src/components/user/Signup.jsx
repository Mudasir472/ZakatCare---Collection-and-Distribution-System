import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import URL from "../../../env"
import logo from "/Logo.png"

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (e) => {
        setFormData((currData) => ({
            ...currData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const resp = await axios.post(`${URL}/zakatcare/signup`, formData, { withCredentials: true });

            if (resp.status === 200) { // Check for successful response
                const sessionId = resp.data.sessionId;
                if (sessionId) {
                    localStorage.setItem('sessionID', sessionId);
                }
                // navigate(resp.data.redirectUrl); // Redirect to home page
                window.location.href = resp.data.redirectUrl;
                // toast.success("Registered Success");
            }
            else if (resp.status === 400) {
                toast.error(resp.data.message);
            } else {
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.response.data.message);

        }

        setFormData({
            name: "",
            username: "",
            email: "",
            password: ""
        });
    };
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign Up to ZakatCare
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                required
                            />
                        </div>

                        <div>
                            <div className="mt-2">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter username"
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    aria-describedby="emailHelp"
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="password"
                                    id="password"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link to={"/zakatcare/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
