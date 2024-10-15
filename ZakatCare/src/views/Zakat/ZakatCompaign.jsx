import frame from '../../NewImages/compaign-Frame.png'
import elipse1 from '../../NewImages/Ellipse1.png'
import elipse2 from '../../NewImages/Ellipse2.png'
import elipse3 from '../../NewImages/Ellipse3.png'
export default function ZakatCompaign() {
    return (
        <>
            <div className="compaign">
                <div className="compaignMain container flex flex-column items-center justify-between">
                    <div className="compaignHead">
                        <h3>Start your campaign today</h3>
                        <p>Campoal has a variety of features that make it the best place to start a petition.</p>
                    </div>
                    <div className="compaign-body flex items-center justify-between">
                        <div className="compaign-left flex flex-column items-start justify-between">
                            <div className="compaign-features flex items-center justify-between">
                                <div className="imgg">
                                    <img src={elipse1} alt="" />

                                </div>
                                <div className="bdy">
                                    <h5 >Manage Your Campaigns</h5>
                                    <p>Easily manage your Zakat campaigns with our intuitive dashboard</p>
                                </div>
                            </div>
                            <div className="compaign-features flex items-center justify-between">
                                <div className="imgg">
                                    <img src={elipse2} alt="" />

                                </div>
                                <div className="bdy">
                                    <h5>Secure and Easy Donations</h5>
                                    <p>Set up your campaign to receive Zakat donations seamlessly from supporters</p>
                                </div>
                            </div>
                            <div className="compaign-features flex items-center justify-between">
                                <div className="imgg">
                                    <img src={elipse3} alt="" />

                                </div>
                                <div className="bdy">
                                    <h5>Generate and Share Reports</h5>
                                    <p>Download detailed reports of your campaign's impact</p>
                                </div>
                            </div>
                        </div>
                        <div className="compaign-right">
                            <img src={frame} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}