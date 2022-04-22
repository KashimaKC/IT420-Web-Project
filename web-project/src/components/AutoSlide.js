import { useState, useEffect } from "react";

/* NOTES:

    changed slide data from being an inline constant defined here to being its own component,
    addressing any information from slideData should be done through the destructured compenent passed
    through AutoSlide. c:

*/

const AutoSlide = ( { slideData } ) => {

    const [current, setImg] = useState(0);
    const length = slideData.length;

    const nextSlide = () => {
        setImg(current === length - 1 ? 0 : current + 1)
    }


    useEffect(() => {
        const interval = setInterval(() => {

            nextSlide() 

        }, 5000);

        return () => clearInterval(interval);

    });

    // if there is no data loaded in the array return null. 
    if ( !Array.isArray(slideData) || slideData.length <= 0 ) {
        return null;
    }

    return (
        <div className="header-slide">
            

            {slideData.map((slide, index) => {

                return (
                    <div className={index === current ? 'slide active' : 'slide'} key = {index} >

                        {index === current && (<img src={slide.image} alt='' className="slide-image"/>)}
                
                    </div>
                )

            })}

            {/* <FaArrowAltCircleRight  className="right-arrow" onClick={nextSlide} /> */}
            
        </div>
    )
}
export default AutoSlide