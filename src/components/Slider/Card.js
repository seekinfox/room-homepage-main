import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import img1 from "../../images/mobile-image-hero-1.jpg"
import img2 from "../../images/mobile-image-hero-2.jpg"
import img3 from "../../images/mobile-image-hero-3.jpg"
import arrow from "../../images/icon-arrow.svg"
import { useMediaQuery } from 'react-responsive';
import desktopImg1 from "../../images/desktop-image-hero-1.jpg";
import desktopImg2 from "../../images/desktop-image-hero-2.jpg";
import desktopImg3 from "../../images/desktop-image-hero-3.jpg";

const data = [
    {
        desktopImg: desktopImg1,
        img: img1,
        name: "white chair",
        heading: "Discover innovative ways to decorate",
        typo: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."

    },
    {
        desktopImg: desktopImg2,
        img: img2,
        name: "yellow chair",
        heading: "We are available all across the globe",
        typo: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our  store locator. Any questions? Don't hesitate to contact us today."

    },
    {
        desktopImg: desktopImg3,
        img: img3,
        name:"black chair",
        heading: "Manufactured with the best materials",
        typo:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

const Card = () => {

    const [next, setNext] = useState(0);
    //console.log(next)
    //console.log(data.length -1)
    const handleNext = () => {
        if(next >=  data.length - 1 ) {
            setNext(0)
        } else {
            setNext(prev => prev + 1)
        }

    }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })


    const handlePrev = () => {
        if(next <= 0){
            setNext(data.length - 1)
        } else {
            setNext( next - 1 )
        }
    }

    return(
        <>
        <section className="card">
            <div className="image">
                {isDesktopOrLaptop ? 
                <img src={data[next].desktopImg} alt={data[next].name} />
                :
                <img src={data[next].img} alt={data[next].name} />
                }
                <div className="buttons">
                    <div className="right"
                     onClick={handleNext}>
                        <AiOutlineRight />
                     </div>
                    <div className="left"
                     onClick={handlePrev}>
                        <AiOutlineLeft />
                     </div>
                </div>
            </div>
            <div className="content">
                <h1>{data[next].heading}</h1>
                <p>{data[next].typo}</p>
                <div className="shop">
                    <p>shop now</p> 
                    <img src={arrow} alt="->" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Card