//NOTES:
//  - definitely needs some more description in the home content.

import Sponsors from "./Sponsors";


const Home = () => {

    const borderStyle = {
        border: '3px solid #bbb',
        borderRadius: '5px',
        width: '95%'
    };


    return (
        <div className="homepage-container">
            <div className="header-container">
                <img src='https://static.wixstatic.com/media/c04eabff71f44db2a551eeeb9589a1f0.jpg/v1/fill/w_754,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c04eabff71f44db2a551eeeb9589a1f0.jpg' alt=""></img>
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