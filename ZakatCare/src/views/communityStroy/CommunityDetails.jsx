import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import URL from "../../../env";
import InputForm from './inputForm';

function CommunityDtails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(null);
    const [currUser, setCurrUser] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [commOwner, setCommOwner] = useState(null);
    const [reviewData, setReviewData] = useState({ comment: '', username: '', email: '' }); // State for review data

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts or id changes
    }, [id]);

    // Get the community data on which you click
    useEffect(() => {
        const fetchZakatcareCommData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/community`, { withCredentials: true });
                setCurrUser(response?.data?.user);
                setData(response?.data?.comunity);
            } catch (error) {
                console.error("Error fetching zakatcare Community data:", error);
            } finally {
                setLoading(false);
            }
        };

        setIsLogin(localStorage.getItem('sessionID'));
        fetchZakatcareCommData();
    }, [reviewData]);

    // Find the specific community based on the ID from params
    const Community = data.find((item) => item._id === id);

    // Get the owner details and all reviews from backend
    useEffect(() => {
        if (!data.length) return;
        const selectedCommunity = data.find((item) => item._id === id);
        if (selectedCommunity) {
            setCommOwner(selectedCommunity?.owner);
            setReviews(selectedCommunity?.commreview || []);
            console.log(selectedCommunity)

        }
    }, [data, id]);
    console.log("rev", reviews)

    //for form deatils
    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitReview = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${URL}/commreview/${id}`, reviewData, { withCredentials: true });
            // window.location.href = `/listing/${id}`
            setReviewData({ comment: '', username: '', email: '' })
            toast.success("Review Success")
            navigate(`/zakatcare/${id}`);

        } catch (error) {
            if (error.status === 401) {
                console.log(error)
                toast.error("Please Login First")
            }
        }
    };
    console.log("data", reviewData)

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
                    <div className="card  listInd border-0 mb-3 ms-4">
                        

                        <img
                            style={{ width: '74rem',height:"30rem" }}
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
                                <p style={{ color: '#6059C9' }} className="font-bold text-xl my-4">
                                    {Community.heading.toUpperCase()}
                                </p>
                                <p className="card-text">{Community.desc}</p>
                            </div>
                            <hr />
                            {
                                reviews.length > 0 ? (
                                    <>
                                        <h3 className='my-3 d-flex align-items-center font-sans text-2xl font-bold'>
                                            Reviews Section
                                        </h3>
                                        <p className='font-bold my-3'>{reviews.length > 1 ? (reviews.length + "  Reviews") : (reviews.length + "  Review")}</p>
                                    </>
                                ) : (null)
                            }
                            <div className="showReviews ">
                                <div className="allReviews my-4 d-flex flex-wrap align-items-center justify-content-between">
                                    {
                                        reviews.map((item) => (
                                            <div key={item._id} className="p-1 w-100percent col-sm-6 mb-3 mb-sm-0">
                                                <div className="shadow-md shadow-inner card h-48 flex items-start	justify-between	">
                                                    <div className="card-body flex flex-column items-start justify-evenly w-full">
                                                        <div className="userP flex items-center justify-between	w-full">
                                                            <div className=' flex items-center	justify-center'>
                                                                <h5 >@{item?.username || "Mudu"}</h5></div>
                                                            {`${new Date(item.createdAt).getDate()} ${months[new Date(item.createdAt).getMonth()]}, ${new Date(item.createdAt).getFullYear()}`}
                                                        </div>
                                                        <p className="card-text">{item.comment}</p>
                                                        {/* {true ? (<a onClick={() => { handleDeleteReview(item) }} className="btn btn-primary">Delete</a>) : (null)} */}
                                                        {/* /currUser?._id === item.author?._id */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="reviewForm">
                                <div class="col-md-7 col-lg-8">
                                    <form onSubmit={submitReview}>
                                        <div className="mb-3">
                                            <label htmlFor="comment" className="form-label">Comment</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Your Comment"
                                                name="comment"
                                                id="comment"
                                                rows="7"
                                                value={reviewData.comment}
                                                onChange={handleReviewChange}
                                                cols="25"
                                                required
                                            ></textarea>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <label for="username" class="form-label">Username</label>
                                            <div class="input-group">
                                                <span class="input-group-text">@</span>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="username"
                                                    placeholder="Username"
                                                    name='username'
                                                    onChange={handleReviewChange}
                                                    value={reviewData.username}
                                                    required=""

                                                />


                                            </div>
                                        </div>

                                        <div class="col-12 mb-3">
                                            <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email"
                                                name='email'
                                                onChange={handleReviewChange}
                                                value={reviewData.email}
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                        <div className="moreBtn">
                                            <button type="submit" className="btn-danger">COMMENT</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default CommunityDtails;
