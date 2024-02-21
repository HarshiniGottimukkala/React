import React, { useState } from 'react'

import avengers from '../../assets/avengers.jpg'
import baaghi from '../../assets/baaghi3.jpg'
import bahubali from '../../assets/bahubali.jpg'
import got from '../../assets/got.jpg'
import kgf2 from '../../assets/kgf2.jpg'
import lionking from '../../assets/lionking.jpg'
import rrr from '../../assets/rrr.jpeg'
import scaredgames from '../../assets/sacredgames.jpg'
import shamshera from '../../assets/shamshera.jpg'
import super30 from '../../assets/super30.jpg'
import vikram from '../../assets/vikram.jpg'

import avengervideo from '../../assets/avengers.mp4'
import baaghivideo from '../../assets/baaghi3.mp4'
import bahubalivideo from '../../assets/Bahubali.mp4'
import gotvideo from '../../assets/Got.mp4'
import kgf2video from '../../assets/Kgf2.mp4'
import lionkingvideo from '../../assets/Lion_King.mp4'
import rrrvideo from '../../assets/RRR.mp4'
import sacredgamesvideo from '../../assets/Sacred_games.mp4'
import shamsheravideo from '../../assets/Shamshera.mp4'
import super30video from '../../assets/Super30.mp4'
import vikramvideo from '../../assets/Vikram.mp4'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Trailers = () => {

    const [selected, setSelected] = useState(0);
    const handleSelected = (i) => {
        setSelected(i)
    }


    const data = [
        {
            title: avengers,
            link: avengervideo
        },
        {
            title: baaghi,
            link: baaghivideo
        },
        {
            title: bahubali,
            link: bahubalivideo
        },
        {
            title: got,
            link: gotvideo
        },
        {
            title: kgf2,
            link: kgf2video
        },
        {
            title: lionking,
            link: lionkingvideo
        },
        {
            title: rrr,
            link: rrrvideo
        },
        {
            title: scaredgames,
            link: sacredgamesvideo
        },
        {
            title: shamshera,
            link: shamsheravideo
        },
        {
            title: super30,
            link: super30video
        },
        {
            title: vikram,
            link: vikramvideo
        },

    ]



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <>
            <div className='trailers'>
                <div className="playlist">
                    <Slider {...settings}>
                        {data.map((item, i) => {
                            return (
                                <>
                                    <div className="selectedimage" onClick={() => { handleSelected(i) }}>
                                        <img src={item.title} alt="" />
                                    </div>

                                </>
                            )
                        })}
                    </Slider>
                </div>

                <div className="show">
                {selected !== null && (
                        <video src={data[selected].link} autoPlay muted loop controls />
                    )}
                </div>
            </div>
            <hr className="horizontal" />
        </>
    )
}

export default Trailers