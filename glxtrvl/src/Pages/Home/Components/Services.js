import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import Slider from "react-slick";


import React from 'react'

const Services = () => {
    const images = [img1, img2, img3, img4, img5]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            
        ]
    };
    return (
        <>
            <h1 className='heading'>Services</h1>
            <div className="services">
                <Slider {...settings}>
                    {
                        images.map((image) =>{
                            return(
                                <div key={image}>
                                    <img src={image} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export default Services