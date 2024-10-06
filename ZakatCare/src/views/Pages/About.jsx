import axios from "axios";
import URL from "../../../env";
import { useEffect, useState } from "react";
import "./contact.css"

import programBG from "../../Images/ourProgramBG.webp";
import OurWork from "./OurWork";
import heart from "../../Images/heart.png";
import fund from "../../Images/fund.png";
import help from "../../Images/help.png";
import future from "../../Images/future.png";

export default function About() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true); // Loader state
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/teammembers`);
                setData(response.data);
                console.log(response.data)
                setLoader(false); // Stop loading after fetching data
            } catch (error) {
                console.error("Error fetching listing data:", error);
                setLoader(false); // Stop loading in case of error too
            }
        };

        // Call the async function
        fetchTeamData();
    }, []);
    console.log("Data", data)

    const abouts = [
        {
            head: "OUR MISSION",
            desc: "Creating Opportunities for a Brighter Future",
            img: future
        },
        {
            head: "WHAT DRIVES US",
            desc: "Passion for Progress: Driven by Empowerment",
            img: heart
        },
        {
            head: "987",
            desc: "People We Helped Since 1993",
            img: help
        },
        {
            head: "Rs 70 + Crores",
            desc: "Funds Donated Since ",
            img: fund
        },
    ];

    // Create skeleton placeholders
    const skeletonCards = Array(3).fill(0); // Adjust the number to the number of placeholders you want

    return (
        <>
            <div className="about">
                <div className="aboutUs">
                    <div
                        style={{
                            backgroundImage: `url(${programBG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center left',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'fixed',
                        }}
                        className="programBG mb-4"
                    >
                        <div style={{ height: "100%" }} className="container childDesc flex flex-column items-center justify-center relative z-10">
                            <h4 style={{ color: "#F4B03E" }} className="font-bold text-5xl">About Us</h4>
                        </div>
                    </div>
                    <div className="our-height flex flex-column items-center justify-evenly">
                        <div className="aboutdesc container">
                            <h3 className="my-4">Zakatcare - Collection and Distribution System</h3>
                            <p>ZakatCare is a platform dedicated to connecting donors with impactful causes. We focus on key programs like education scholarships, feeding the poor, relief and rehabilitation, and marriage assistance. Our mission is to ensure every Zakat donation makes a meaningful difference, helping communities thrive through trusted and transparent distribution.</p>
                        </div>
                        <div className="container aboutUsWork flex flex-wrap items-center flex-row justify-between">
                            {abouts.map(about => (
                                <OurWork
                                    head={about.head}
                                    desc={about.desc}
                                    img={about.img}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="ourTeam container">
                        <div className="ourTeamMain d-flex justify-content-evenly flex-column">
                            <div className="teamHeader d-flex justify-content-center align-items-center flex-column">
                                <div className="teamHead">
                                    <h4>Our Team</h4>
                                </div>
                                <div className="teamDesc mb-4 col-111 flex items-center justify-center">
                                    <p style={{ textAlign: "center" }}>ZakatCare is powered by a dedicated team of professionals who share a passion for helping those in need. Each member brings unique skills and expertise, working together to deliver the best possible impact for our communities.</p>
                                </div>
                            </div>
                            <div className="teamMems d-flex flex-wrap justify-content-between">
                                {loader ? (
                                    // Render skeleton placeholders when data is loading
                                    skeletonCards.map((_, index) => (
                                        <div key={index} className="card teamImg" style={{ width: "23rem" }}>
                                            <div className="card-img-top" style={{ height: '24rem', backgroundColor: '#ddd' }}></div>
                                            <div className="card-body">
                                                <p className="placeholder-glow">
                                                    <span className="placeholder col-6"></span>
                                                </p>
                                                <p className="placeholder-glow">
                                                    <span className="placeholder col-4"></span>
                                                </p>
                                                <p className="card-text placeholder-glow">
                                                    <span className="placeholder col-7"></span>
                                                    <span className="placeholder col-4"></span>
                                                    <span className="placeholder col-6"></span>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    data.map((item) => (

                                        <div key={item.name} className="card teamImg" style={{ width: "23rem" }}>

                                            <div className="MemImg img-container">
                                                <img style={{ height: '24rem' }} src={item.imgLink} className="card-img-top hover-img" alt={item.name} />

                                                {/* Icons Container */}
                                                <div className="social-icons">
                                                    <a style={{ color: "rgb(59, 89, 152)" }} href={item.links[0]} target="_blank" rel="noopener noreferrer">
                                                        <i class="bi bi-facebook"></i>
                                                    </a>
                                                    <a style={{ color: 'rgb(193, 53, 132)' }} href={item.links[1]} target="_blank" rel="noopener noreferrer">
                                                        <i class="bi bi-instagram"></i>
                                                    </a>
                                                    <a style={{ color: 'rgb(0, 119, 181)' }} href={item.links[2]} target="_blank" rel="noopener noreferrer">
                                                        <i class="bi bi-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p><b>{item.name}</b></p>
                                                <p style={{ color: "#254370" }}>{item.speciality}</p>
                                                <p className="card-text col-111">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))



                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
