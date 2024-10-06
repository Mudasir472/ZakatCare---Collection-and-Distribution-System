import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import URL from "../../../env"
import logo from "/Logo.png"

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData((currData) => ({
            ...currData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await axios.post(`${URL}/zakatcare/login`, formData, { withCredentials: true });
            if (resp.status === 200) {
                const sessionId = resp.data.sessionId;
                if (sessionId) {
                    localStorage.setItem('sessionID', sessionId);
                }
                const data = resp.data;
                console.log('Message:', data.message);
                toast.success("Login Success");
                // navigate(data.redirectUrl);
                window.location.href = resp.data.redirectUrl;
            } else {
                console.error('Login failed');
                toast.error('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.status === 401) {
                toast.error("Enter Valid Credentials");
                console.log("wrong details")
            }
            if (error.response && error.response.data) {
                navigate(error.response.data.redirectUrl || '/zakatcare/login');
            } else {
                toast.error('An unexpected error occurred');
            }
        }

        setFormData({
            username: "",
            password: "",
        });
    };

    // const loginGoogle = () => {
    //     window.open('http://localhost:8090/auth/google/callback', "_self")
    // }
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
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
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

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="form-label">Password</label>
                            </div>
                            <div className="mt-2">
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
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to={"/zakatcare/signup"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
