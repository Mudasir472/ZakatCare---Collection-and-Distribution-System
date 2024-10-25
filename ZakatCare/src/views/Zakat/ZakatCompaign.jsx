import frame from '../../assets/images/compaign-Frame.webp'
import elipse1 from '../../NewImages/manage.png'
import elipse2 from '../../NewImages/donation.png'
import elipse3 from '../../NewImages/export.png'
export default function ZakatCompaign() {
    return (
        <>
            <div className="compaign">
                <div className="compaignMain container flex flex-column items-center justify-between">
                    <div className="compaignHead">
                        <h3>Start your campaign today</h3>
                        <p>Launch your Zakat campaign effortlessly with ZakatCare. Our platform offers powerful features to help you make a real impact</p>
                    </div>
                    <div className="compaign-body flex items-center justify-between">
                        <div className="compaign-left flex flex-column items-start justify-between">
                            <div className="compaign-features flex items-center justify-between">
                                <div className="imgg">
                                    <img src={elipse1} alt="" />

                                </div>
                                <div className="bdy">
                                    <h5 >Manage Your Campaigns</h5>
                                    <p>Stay in control with our intuitive dashboard, designed to easily manage and track your Zakat campaigns</p>
                                </div>
                            </div>
                            <div className="compaign-features flex items-center justify-between">
                                <div className="imgg">
                                    <img src={elipse2} alt="" />

                                </div>
                                <div className="bdy">
                                    <h5>Secure and Easy Donations</h5>
                                    <p>Receive Zakat donations seamlessly from supporters, with secure and straightforward setup</p>
                                </div>
                            </div>
                            <div className="compaign-features flex items-center justify-between">
                                <div className="imgg">
                                    <img src={elipse3} alt="" />

                                </div>
                                <div className="bdy">
                                    <h5>Generate and Share Reports</h5>
                                    <p>Download detailed reports of your campaign's Zakat impact</p>
                                </div>
                            </div>
                        </div>
                        <div className="compaign-right">
                            <img style={{ height: '464px', width:'637px'}} src={frame} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}