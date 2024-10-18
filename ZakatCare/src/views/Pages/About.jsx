import axios from "axios";
import URL from "../../../env"
import { useEffect, useState } from "react";

import img from "../../NewImages/platform-img.png"
import activist from "../../NewImages/activist.png"
import decision from "../../NewImages/decision.png"
import groups from "../../NewImages/groups.png"
import report from "../../NewImages/report.png"
import MaskGroup from "../../NewImages/MaskGroup.png"

import valuesRect from "../../NewImages/valuesRect.png"

import story1 from "../../NewImages/story-1.png"
import story2 from "../../NewImages/story-2.png"
import story3 from "../../NewImages/story-3.png"
import story4 from "../../NewImages/story-4.png"

import visionFrame from '../../NewImages/visionFrame.png'

import "./about.css"
import AboutBelieveComps from "./AboutBelieveComps"
function About() {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [visibleItems, setVisibleItems] = useState(3);

    useEffect(() => {
        const fetchListingData = async () => {
            try {
                const response = await axios.get(`${URL}/zakatcare/teammembers`);
                setData(response.data);
                console.log(response.data)
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
    return (<>
        <div className="about-us">
            <div className="aboutMain ">
                <div className="platform  flex flex-column items-center justify-evenly">
                    <div className="platform-head flex flex-column items-center justify-evenly">
                        <h3>World’s Petition Platform</h3>
                        <p>We started in 2016 with the radical idea that anyone, anywhere, should be able to easily and securely to start their own petition. Today, we offer a trusted and easy-to-use platform for social movement accross the world.</p>
                    </div>
                    <div className="platform-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="believe container flex items-center justify-between">
                    <div className="believe-left-bdy">
                        <div className="believe-left">
                            <p className="mb-4">Who use platfrom?</p>
                            <h3>We believe that when everyone speaks out the problem of society and action together, the world will become a better place.</h3>
                        </div>
                    </div>
                    <div className="believe-Rights flex items-center">
                        <div className="believe-right flex flex-wrap items-center justify-center" >
                            <AboutBelieveComps head="Activists" desc="Social activists can start a social movements and connect supporters in their communities." img={activist} />
                            <AboutBelieveComps head="Legislators" desc="Decision makers at the highest levels of government are engaging with their constituents." img={decision} />
                            <AboutBelieveComps head="Organizations" desc="Leading organizations are advancing their causes and mobilizing new supporters." img={groups} />
                            <AboutBelieveComps head="Reporters" desc="Journalists are sourcing powerful stories and covering campaigns hundreds of times a day." img={report} />
                        </div>
                    </div>

                </div>
                <div className="voice">
                    <div className="voiceMain container flex flex-column items-center justify-evenly">
                        <div className="voiceH3">
                            <h3>We believe in your voice</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>We're in here with a simple and clear mission is building a powerful platform for the change, helping people around the world to raise their voices, collecting signatures and contribute to the world.</p>
                            <p>At Conikal, We believe that the power to change the world is in all human beings, we also believe that when everyone speaks out the problem of society and action together, the world will become a better place.</p>
                        </div>
                        <img src={MaskGroup} alt="" />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${valuesRect})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                }} className="values">
                    <div className="valuesMain container flex items-start justify-evenly flex-column" >
                        <div className="valuesMainBody flex flex-column items-start justify-evenly">
                            <h3>Our values</h3>
                            <div className="valueComps flex items-center justify-between">
                                <div className="value1 flex flex-column items-start justify-evenly">
                                    <h4>01</h4>
                                    <div>
                                        <p className="p1">Make more value, not money.</p>
                                        <p className="p2">We focus on creative and delivering value to people across the world.</p>
                                    </div>
                                </div>
                                <div className="value1 flex flex-column items-start justify-evenly">
                                    <h4>02</h4>
                                    <div>
                                        <p className="p1">Make it simple, not stressful.</p>
                                        <p className="p2">We make everything simple, clearly and accessible to everyone.</p>
                                    </div>
                                </div>
                                <div className="value1 flex flex-column items-start justify-evenly">
                                    <h4>03</h4>
                                    <div>
                                        <p className="p1">Be human, not devil.</p>
                                        <p className="p2">We do the right things with love and sincerity to create sustainability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ourStory container">
                    <div className="storyMain flex items-center justify-between">
                        <div className="story-left flex flex-column items-start justify-evenly">
                            <h3>Our story</h3>
                            <div className="story-paras flex flex-column items-start justify-evenly">
                                <p>ZakatCare was born out of a shared vision to make charitable giving more impactful and meaningful. As a platform rooted in the principles of Zakat, we aim to bridge the gap between generous donors and those in need, ensuring that every contribution reaches its intended purpose. Our journey began with a simple yet powerful idea: to create a trusted, transparent, and efficient system for the distribution of Zakat, where donors can directly support causes they care about.</p>
                                <p>We are dedicated to empowering communities through various programs that include education scholarships, feeding the poor, relief and rehabilitation, and marriage assistance. By collaborating with organizations and individuals, we strive to ensure that each donation is not just a transaction but a step towards building a better future for those in need.</p>
                                <p>At ZakatCare, we believe in the transformative power of giving and are committed to creating a platform where compassion meets action, making a lasting impact on countless lives.</p>
                                <p>ZakatCare was founded to bridge the gap between donors and those in need, ensuring every contribution makes a real difference. Our platform focuses on key areas: providing scholarships for education, feeding the poor, offering relief and rehabilitation, and supporting marriage assistance. We strive to transform each donation into a step toward building a better future for vulnerable communities.</p>

                            </div>
                        </div>
                        <div className="story-right flex items-center justify-evenly">
                            <div className="story-part1 flex flex-column items-start justify-start">
                                <img className="mb-4" src={story1} alt="" />
                                <img src={story2} alt="" />
                            </div>
                            <div className="story-part2 flex flex-column items-end justify-end">
                                <img className="mb-4" src={story3} alt="" />
                                <img src={story4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vision">
                    <div className="vivisonMain flex flex-column items-center justify-evenly">
                        <div className="visionHeading">
                            <h3>Our vision</h3>
                            <p>Our vision is to be the best petition platform in the world.</p>
                        </div>
                        <div className="visionImg">
                            <img src={visionFrame} alt="" />
                        </div>
                    </div>
                </div>

                <div className="signatures  flex items-center justify-between">
                    <div className="signatureMain container flex items-center justify-between">
                        <div className="sign-1 flex flex-column items-center justify-center">
                            <h3>40,000</h3>
                            <p>Signature every hours</p>
                        </div>
                        <div className="sign-1 flex flex-column items-center justify-center">
                            <h3>40,000</h3>
                            <p>Signature every hours</p>
                        </div>
                        <div className="sign-1 flex flex-column items-center justify-center">
                            <h3>40,000</h3>
                            <p>Signature every hours</p>
                        </div>
                    </div>
                </div>

                <div className="team-members">
                    <div className="team-memsMain flex items-center justify-evenly">
                        <div className="team-left flex flex-column items-start justify-between">
                            <div className="team-left-bdy">
                                <h3>Our team</h3>
                                <p>We need talented, passionate people to changing the world</p>
                            </div>
                            <button onClick={showMoreItems} className="team-btn">See all members</button>
                        </div>
                        <div className="team-right">
                            <div className="teamMems d-flex flex-wrap justify-content-between">
                                {data.slice(0, visibleItems).map((item) => (
                                    <div class=" teamImg" style={{ width: "18rem" }}>
                                        <img src={item.imgLink} class="img-top" alt={item.name} />
                                        <div class="team-body flex items-center flex-column justify-center">
                                            <p><b>{item.name}</b></p>
                                            <p class="card-text col-111">{item.speciality}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="fresh">
                    <div className="freshMain  flex items-center justify-evenly">
                        <div className="fresh-left">
                            <h3>Try something fresh and new right now</h3>
                        </div>
                        <div className="fresh-right ">
                            <div className="formDetails flex flex-column items-start justify-evenly">
                                <div>
                                    <form>
                                        <input type="email"
                                            placeholder="Enter email"
                                            required
                                        />
                                        <span><button>Subscribe</button></span>
                                    </form>
                                </div>
                                <p>Get latest update from us. You can cancel any time.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;