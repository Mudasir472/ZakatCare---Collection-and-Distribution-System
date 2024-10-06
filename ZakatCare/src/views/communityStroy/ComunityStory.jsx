import "./community.css"
import axios from "axios";
import URL from "../../../env"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ComunityStory() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [visibleItems, setVisibleItems] = useState(3); // Number of items to display initially

    useEffect(() => {
        const fetchListingData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/community`);
                setData(response.data?.comunity);
                setLoader(false);
            } catch (error) {
                console.error("Error fetching listing data:", error);
            }
        };

        // Call the async function
        fetchListingData();
    }, []);

    const showMoreItems = () => {
        setVisibleItems(data.length); // Show all items when 'More' button is clicked
    };

    return (
        <>
            <div className="community">
                <div className="commMain container">
                    <div className="communityHead flex flex-column items-center justify-evenly">
                        <h3 style={{ color: '#F4B03E' }}>Transforming Communities. One Story at a Time.</h3>
                        <p className=" text-center">We believe in the power of every donation to make a lasting impact. Through targeted programs and heartfelt stories, we transform lives, one community at a time, fostering hope and change for those in need.</p>
                        <span className="separators"></span>
                    </div>
                    <div className="commComponents flex flex-wrap items-center justify-evenly">
                        {
                            data.slice(0, visibleItems).map((item) => (
                                <div key={item._id} className="comComponents ">
                                    <div style={{ height: "30rem" }} className="comCompsMain">
                                        <div  className="card  justify-between rem-border">
                                            <img style={{ height: '18rem' }} src={item.imgLink} className="card-img-top" alt="..." />
                                            <div className="card-body p-0">
                                                <Link to={`/zakatcare/${item._id}`}><p style={{ color: '#F4B03E' }} className="font-bold text-xl my-4">{item.heading.toUpperCase()}</p></Link>
                                                <p className="w-change card-text">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {visibleItems < data.length && (
                        <div className="flex justify-center my-4 moreBtn">
                            <button onClick={showMoreItems}>More<span><i class="bi bi-arrow-right"></i></span></button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ComunityStory;
