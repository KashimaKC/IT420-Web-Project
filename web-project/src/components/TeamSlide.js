import {  useState } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const TeamSlide = ( { teamSlideData, teamSlideText } ) => {

    const [currentImg, setImg] = useState(0);
    const [currentText, setText] = useState(0);

    const length = teamSlideData.length;
    const lengthText = teamSlideText.length;

    // compares value of the current slide and adjusts the slide accordingly 
    const nextSlide = () => {
        setImg(currentImg === length - 1 ? 0 : currentImg + 1)
        setText(currentText === lengthText - 1 ? 0 : currentText + 1)
    }

    const previousSlide = () => {
        setImg(currentImg === 0 ? length - 1: currentImg - 1)
        setText(currentText === 0 ? lengthText - 1 : currentText - 1)
    }


    if ( !Array.isArray(teamSlideData) || teamSlideData.length <= 0 ) {
        return null;
    }

    if ( !Array.isArray(teamSlideText)  || teamSlideText.length <= 0) {
        return null;
    }

    //gonna be real here, I am genuinely suprised this even worked. c:

    return (
        <div className="team-container">

            {/* styling for all the arrows is located in the autoslide.css file */}

            <FaArrowAltCircleLeft  className="right-arrow" onClick={previousSlide} />

            <div className="team-image">

                {teamSlideData.map((slide, index) => {

                    return (
                            <div className={index === currentImg ? 'slide active' : 'slide'} key = {index} >

                                {index === currentImg && (<img src={slide.image} alt='' className="slide-image"/>)}

                            </div>
                    )

                })}

            </div>

            <div className="team-content">

                {teamSlideText.map((text, index) => {

                    return (
                        <div className={index === currentText ? 'slide active' : 'slide'} key = {index} >

                            {index === currentText && (
                                <div className="slide-text">
                                    <h3> {text.textHeader} </h3>
                                    {text.textContent}
                                </div>
                            )}

                        </div>
                    )

                })}

            </div>

            <FaArrowAltCircleRight  className="right-arrow" onClick={nextSlide} />

        </div>
    )
}

export default TeamSlide