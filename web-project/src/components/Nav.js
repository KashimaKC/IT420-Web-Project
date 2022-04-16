/* Component for top navigation bar  */
/* Direct components that are children of this component are:
    - Body
*/
/*
    The function of this component is to act as a direct routing and page
    content manager for the website.

    NOTE: all image references will currently be pointed to web addresses directly from the website, this will change later either 
          with static references locally or image file hosting. prefer the hosting c:
*/

import Home from "./Home"
import Volunteer from "./Volunteer"
import Donate from "./Donate"
import Help from "./Help"
import About from "./About"
import { useState } from 'react'

const Nav = () => {

    const [bodyContent, setContent] = useState(<Home />)

    //this function takes in an argument that is passed in from the button and changes
    //the body content according to that arg

    const changeBodyContent = (pageKey) => {

        switch (pageKey) {
            case 'home' : 
                setContent(<Home />)
                break;
            case 'volunteer' :
                setContent(<Volunteer />)
                break;
            case 'donate' : 
                setContent(<Donate />)
                break;
            case 'help' :
                setContent(<Help />)
                break;
            case 'about' :
                setContent(<About />)
                break;
            default :
                console.log('default page layout');
        }

    }


    return (
        <div>
            <div className='navbar-container'>

            <p>
                Starting Point World
            </p>

            <button id="home-btn" onClick={() => changeBodyContent('home')}>Home</button>
            <button id="volunteer-btn" onClick={() => changeBodyContent('volunteer')}>Volunteer</button>
            <button id="donate-btn" onClick={() => changeBodyContent('donate')}>Donate</button>
            <button id="help-btn" onClick={() => changeBodyContent('help')}>Request Help</button>
            <button id="about-btn" onClick={() => changeBodyContent('about')}>About Us</button>

            </div>
            <div className="body-content">

                {bodyContent}

            </div>
        </div>
    )
}

export default Nav