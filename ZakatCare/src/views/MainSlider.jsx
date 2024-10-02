import slider2 from "../../src/Images/slide-poor-1.jpg";
import slider1 from "../../src/Images/slide-poor-2.jpg";
import slider3 from "../../src/Images/slide-poor-3.jpg";
import React, { useEffect } from 'react';
import "./views.css"

const MainSlider = () => {
    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        if (carousel) {
            const bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
                interval: 10000, // Set timer to 10 seconds (10000ms)
                pause: 'hover',
                keyboard: true
            });

            carousel.addEventListener('mousedown', (event) => {
                const startX = event.pageX;
                const handleMouseUp = (event) => {
                    const endX = event.pageX;
                    if (startX > endX) {
                        bootstrapCarousel.next();
                    } else if (startX < endX) {
                        bootstrapCarousel.prev();
                    }
                    window.removeEventListener('mouseup', handleMouseUp);
                };
                window.addEventListener('mouseup', handleMouseUp);
            });
        }
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active" style={{ position: 'relative', height: '500px' }}>
                    <div
                        style={{
                            backgroundImage: `url(${slider1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            filter: 'brightness(0.9)'  // Dim the background for better text visibility
                        }}
                    ></div>
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p className="text-5xl font-bold  text-center">Together, We Can Build a Brighter Future</p>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item" style={{ position: 'relative', height: '500px' }}>
                    <div
                        style={{
                            backgroundImage: `url(${slider2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            filter: 'brightness(0.9)'  // Dim the background for better text visibility
                        }}
                    ></div>
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p className="text-5xl font-bold  text-center">Ensure Your Zakat Reaches the Destination</p>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item" style={{ position: 'relative', height: '500px' }}>
                    <div
                        style={{
                            backgroundImage: `url(${slider3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            filter: 'brightness(0.9)'  // Dim the background for better text visibility
                        }}
                    ></div>
                    <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <p className="text-5xl font-bold text-center">Your Contribution Can Change Lives Forever</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MainSlider;
