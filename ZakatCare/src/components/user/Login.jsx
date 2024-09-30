import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import URL from "../../../env"

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
                navigate(error.response.data.redirectUrl || '/login');
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
            <div className="login my-4 ">
                <form className="flex flex-column items-center justify-center" style={{ marginBottom: "6rem" }} onSubmit={handleSubmit}>
                    <div className="mainLogin flex flex-column items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500		">
                        <div className="mt-4 DOresponsive">
                            <h3 className="text-2xl font-bold mb-3">Login to Muddu-Electronics</h3>
                        </div>
                        <div className="mb-3 mt-4 DOresponsive">
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
                        <div className="mb-3 DOresponsive">
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
                        <button type="submit" className="btn btn-primary mb-3">Login</button>
                    </div>
                </form>
                {/* <button onClick={loginGoogle} className="btn btn-primary mb-3 col-3 offset-5">Login with Google</button> */}
            </div>
        </>
    );
}

