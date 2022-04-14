/* Component for top navigation bar */

const Nav = ({ onClick }) => {


    return (

        <div className='navbar-container'>

            <p>
                Starting Point World
            </p>
            <button id="home-btn" onClick={onClick}>Home</button>
            <button id="volunteer-btn">Volunteer</button>
            <button id="donate-btn">Donate</button>
            <button id="help-btn">Request Help</button>
            <button id="about-btn">About Us</button>

        </div>

    )
}

export default Nav