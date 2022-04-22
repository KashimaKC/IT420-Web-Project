//NOTES:
//  - definitely needs some more description in the home content.

import Sponsors from "./Sponsors";
import AutoSlide from "./AutoSlide";
import slideData from "./slideData";


const Home = () => {

    const borderStyle = {
        border: '3px solid #bbb',
        borderRadius: '5px',
        width: '95%'
    };


    return (
        <div className="homepage-container">
            <div className="header-container">
                <div className="slideshow-container">

                    <AutoSlide slideData={slideData} />

                </div>
                <h2>
                    Starting Point is dedicated to supporting newly-arrived refugee children in the greater Sacramento area.
                    We strive to give them a warm welcome by providing basic necessities and programs as they begin their new lives in the U.S.
                </h2>
            </div>

            <hr style={borderStyle}/>
            <Sponsors />
        </div>
    )
}

export default Home