// this component renders the donation page.

const Donate = () => {


    return (
        <div className="donate-container">
            <img src="" alt=""></img>
            <h1>Two Ways to Give:</h1>
            <div className="monetary-donation">
                <h2>Monetary Donation</h2>
                <p>
                    Monetary donations support our community programs and projects as well as enable us to purchase other
                    immediate necessities for children and their families. <br /> <br />
                    Donations to Starting Point are tax deductible. Our nonprofit EIN number is 82-2055439. <br />
                    <b>Click here to be linked to Paypal:</b>
                </p>
                <button id="donate-link-bttn">Donate</button>
            </div>
            <hr />

            <div className="item-donation">
                <h2>Item Donation</h2>
                <p>
                    Show some love to young newcomers through a donation.  We are in need of: <br />
                </p>
                <ul style={{textAlign: 'left'}}>
                    <li>Socks (new only)</li>
                    <li>Children's shoes (new only)</li>
                    <li>Walmart gift cards for clothing</li>
                </ul>
                <p>
                    Please complete the following form if you are interested in donating, we will contact you as soon as possible!
                </p>
                <form className="donation-form">
                    <input type={'text'} id='name' placeholder="Full name" required></input>
                    <input type={'email'} id='email' placeholder="sample@email.com" required></input>
                    <input type={'phone'} id='phone' placeholder="(888)888-8888" required></input>
                    <input type={'text'} id='address' placeholder="7777 Donation Ln."></input>
                    <input type={'text'} id='items' placeholder="Items you would like to donate (please include gender and size)" required></input>
                    <input type={'submit'} value='Submit'></input>
                </form>
            </div>
        </div>
    )
}

export default Donate