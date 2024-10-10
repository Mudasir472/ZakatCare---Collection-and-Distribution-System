import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import "./user.css"
import URL from "../../../env"

function UserProfile() {
    const fileInputRef = useRef(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/profile`, { withCredentials: true });
                setUser(response.data.user);
                console.log(response.data.user)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>No user data available</div>;

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profilePic', file);

            try {
                const response = await axios.post(`${URL}/zakatcare/changeprofile`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true, // Ensure credentials are included
                });

                // Assuming the response contains the updated user info
                console.log('File uploaded successfully:', response.data);
                toast.success("file uploaded successfully")
                setUser(response.data.user); // Update state with the new user data
            } catch (error) {
                console.error('Error uploading the file:', error);
                // Handle errors appropriately (e.g., display error message to user)
            }
        }
    };

    const updateHandle = () => {
        navigate("/updateuser", { state: { user } })
    }


    return (
        <div className="container ">
            <div className="px-4 sm:px-0 ">
                <div className="userinfo flex items-center justify-start">
                    <div className="profileimage">
                        <form encType="multipart/form-data">
                            {/* Hidden file input */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                name="profilePic"
                            />
                        </form>
                        <img
                            className="h-16 rounded-full mr-4 cursor-pointer"
                            src={user.image.url}
                            alt=""
                            onClick={handleImageClick}
                        />
                    </div>
                    <div className="details">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t border-gray-100">

                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">username</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.username}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                    </div>
                    <button onClick={updateHandle} type="submit" className="btn btn-primary my-3 col-3 offset-1" >
                        {/* {loading ? 'Updating...' : 'Update'} */} Update
                    </button>

                </dl>
            </div>
        </div>


    );
}

export default UserProfile;
