import "../components/user/user.css"
export default function footer() {
    return (
        <>
            <div className=" mt-10" style={{ backgroundColor: '#1c1c1c' }} >
                <footer class="container py-3">
                    <div class="row text-white text-left">
                        <div class="col-6 col-md-3 mb-3 ">
                            <h4>About Us</h4>
                            <p> At ZakatCare:-Collection and Distribution System,connects zakat donations to those in need, ensuring transparency and impact. Join us in making a difference in our community.</p>
                        </div>

                        <div class="col-6 col-md-3 mb-3 ">
                            <h4>Recent Posts</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">
                                    Health for Schoolchildren and Their Families</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">
                                    If children are affected, we’ve got something to say
                                </a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">
                                    Ensuring children are not forgotten during natural disasters</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3 mb-3">
                            <h4>Donation</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">You can also donate in the:</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">IBAN:011565221211(USD)</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">IBAN:2215545454664</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">SWIFT:ALLSR</a></li>

                            </ul>
                        </div>

                        <div class="col-md-3 mb-3">
                            <form>
                                <h4>Contact Us</h4>
                                <p>Email: abc@gmail.com</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
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
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="bi bi-facebook"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    );
}