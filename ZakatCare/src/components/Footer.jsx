import "../components/user/user.css"
export default function footer() {
    return (
        <>
            <div className=" mt-10" style={{
                backgroundColor: ' #22130C'
            }} >
                <footer class="container py-3" >
                    <div class="row text-white text-left flex footerMain">
                        <div class="col-6 col-md-3 mb-3 title">
                            <h3 className="mb-2">About Us</h3>
                            <p> At ZakatCare:-Collection and Distribution System,connects zakat donations to those in need, ensuring transparency and impact. Join us in making a difference in our community.</p>
                        </div>

                        <div class="col-6 col-md-3 mb-3 title">
                            <h3 className="mb-2">Recent Posts</h3>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">
                                    Health for Schoolchildren and Their Families</li>
                                <li class="nav-item mb-2">
                                    If children are affected, we’ve got something to say
                                </li>
                                <li class="nav-item mb-2">
                                    Ensuring children are not forgotten during natural disasters</li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3 mb-3 title">
                            <h3 className="mb-2">Donation</h3>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">Acc: 12345678</li>
                                <li class="nav-item mb-2">Acc: 87654321</li>
                                <li class="nav-item mb-2">Bank: Kotak</li>

                            </ul>
                        </div>

                        <div class="col-md-3 mb-3 title">
                            <form>
                                <h3 className="mb-2">Contact Us</h3>
                                <p>Email: abc@gmail.com</p>
                                <div class="d-flex flex-column  w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white">
                        <p>© 2024 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex  social">
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-twitter-x"></i></a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-instagram"></i></a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-facebook "></i></a></li>
                        </ul>
                    </div>
                </footer >
            </div >
        </>
    );
}