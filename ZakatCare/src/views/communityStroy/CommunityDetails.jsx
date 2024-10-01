import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import URL from "../../../env";

function CommunityDtails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(null);
    const [currUser, setCurrUser] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [commOwner, setCommOwner] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts or id changes
    }, [id]);

    // Get the community data on which you click
    useEffect(() => {
        const fetchZakatcareCommData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/community`, { withCredentials: true });
                console.log("user", response.data.user);
                setCurrUser(response?.data?.user);
                setData(response?.data?.comunity);
                console.log("data", response?.data?.comunity);
            } catch (error) {
                console.error("Error fetching zakatcare Community data:", error);
            } finally {
                setLoading(false);
            }
        };

        setIsLogin(localStorage.getItem('sessionID'));
        fetchZakatcareCommData();
    }, []);

    // Find the specific community based on the ID from params
    const Community = data.find((item) => item._id === id);
    console.log("comm", Community);

    // Get the owner details
    useEffect(() => {
        if (!data.length) return;
        const selectedCommunity = data.find((item) => item._id === id);
        if (selectedCommunity) {
            console.log(selectedCommunity);
            setCommOwner(selectedCommunity?.owner);
        }
    }, [data, id]);

    // Handle loading and error states
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!Community) {
        return <div>Community not found or data is still loading.</div>;
    }

    return (
        <>
            <div className="container">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className="card  listInd border-0 mb-3">
                        <h3 className='h-20 d-flex headding align-items-center font-sans text-2xl font-bold'>
                            {Community.heading}
                        </h3>

                        <img
                            style={{ width: '67rem' }}
                            className='h-96 w-full mb-4 card-img-top'
                            src={Community.imgLink}
                            alt={Community.heading}
                        />
                        <div className="card-body">
                            {commOwner ? (
                                <p>Posted By: {commOwner.name}</p>
                            ) : (
                                <p>Owner details not available.</p>
                            )}
                            <div className="heading">
                                <p style={{ color: '#F4B03E' }} className="font-bold text-xl my-4">
                                    {Community.heading.toUpperCase()}
                                </p>
                                <p className="card-text">{Community.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommunityDtails;
