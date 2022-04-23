import teamSlideData from "./TeamSlideData"
import TeamSlide from "./TeamSlide"
import teamSlideText from "./TeamSlideText"
import Sponsors from "./Sponsors"

const About = () => {
    
    return (

        <div className='about-container'>

            <h1>Meet the Team</h1>

            <TeamSlide teamSlideData={teamSlideData} teamSlideText={teamSlideText}/>

            <Sponsors />

        </div>
    )
}

export default About