import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const AutoSlide = () => {

    const slideData = [
        {
            image: 'https://i.imgur.com/1GKYSV1.jpg'
        }, 
        {
            image: 'https://i.imgur.com/rkfKCKN.jpg'
        },
        {
            image: 'https://i.imgur.com/5PyflYv.jpg'
        }
    ]

    const [current, setImg] = useState(0);
    const length = slideData.length;

    const nextSlide = () => {
        setImg(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setImg(current === 0 ? length - 1 : current - 1)
    }

    // if there is no data loaded in the array return null. 
    if ( !Array.isArray(slideData) || slideData.length <= 0) {
        return null;
    }

    return (
        <div className="header-slide">
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide}/>
            <FaArrowAltCircleRight  className="right-arrow" onClick={nextSlide} />

            {slideData.map((slide, index) => {

                return (
                    <div className={index === current ? 'slide active' : 'slide'} key = {index} >

                        {index === current && (<img src={slide.image} alt='' className="slide-image"/>)}
                
                    </div>
                )

            })}
        </div>
    )
}
export default AutoSlide