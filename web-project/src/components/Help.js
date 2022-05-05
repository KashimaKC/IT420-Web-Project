import Sponsors from "./Sponsors"
import React, { useState } from "react";
import axios from 'axios'; //allows us to create api requests

// this component renders the request help page

const Help = () => {

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [street, setStreet] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfArrival, setDateOfArrival] = useState(null);
    const [dateReceived, setDateReceived] = useState(null);
    const [countryOfOrigin, setCountryOfOrigin] = useState('');
    const [immigrationStatus, setImmigrationStatus] = useState(null);
    const [speaksEnglish, setSpeaksEnglish] = useState(null);
    const [notes, setNotes] = useState('');
    
    const submitHelpForm = () => {
        axios.post('http://localhost:3001/', {lastName: lastName, firstName: firstName, address: address, 
                                                street: street, apartment: apartment, city: city, 
                                                zipcode: zipcode, phone: phone, dateOfArrival: dateOfArrival, 
                                                dateReceived: dateReceived, countryOfOrigin: countryOfOrigin, 
                                                immigrationStatus: immigrationStatus, speaksEnglish: speaksEnglish, notes: notes
                                                /*, childField: childField*/
                                                }).then(() => {
                                                    alert('successful insert');
                                                });
    };

    return (
        <div className="help-request-container">
            <h3 className="request-header">
                If you are a newcomer and your children need basic necessities, please complete the form below.
                We will contact you soon with more information about becoming a Starting Point family.
            </h3>

            <form className="request-help-form" /*onSubmit={submitHelpForm} */>
                <input type={'text'} placeholder='Parent Last Name' maxlength='250' required onChange={(e) => {setLastName(e.target.value)}}/>
                <input type={'text'} placeholder='Parent First Name' maxlength='250' required onChange={(e) => {setFirstName(e.target.value)}}/>
                <input type={'text'} placeholder='Street Number - example: 2311' maxlength='10' required onChange={(e) => {setAddress(e.target.value)}}/>
                <input type={'text'} placeholder='Street Name - example: Hamlet Way' maxlength='250' required onChange={(e) => {setStreet(e.target.value)}}/>
                <input type={'text'} placeholder='Apt/Suite/Unit/Building/Floor - example: Apt. 4' maxlength='20' onChange={(e) => {setApartment(e.target.value)}}/>
                <input type={'text'} placeholder='City - example: Manhattan' maxlength='25' required onChange={(e) => {setCity(e.target.value)}}/>
                <input type={'text'} placeholder='Postal Code - example: 80456' maxlength='15' required onChange={(e) => {setZipcode(e.target.value)}}/>
                <input type={'text'} placeholder="Phone Number" required onChange={(e) => {setPhone(e.target.value)}}/>
                <label for="date">Input Date arrived in US:</label>
                    <input type={'date'} placeholder='Date arrived in US' required onChange={(e) => {setDateOfArrival(e.target.value)}}/>
                <label for="date">Input Current Date:</label>
                    <input type={'date'} placeholder='Current Date' required onChange={(e) => {setDateReceived(e.target.value)}}/>
                <input type={'text'} placeholder='Country of Origin - example: Afghanistan' maxlength='250' required onChange={(e) => {setCountryOfOrigin(e.target.value)}}/>
                <label for="Immigration Status">Select an Immigration Status:</label>
                    <select id="immigration status" name="immigrationStatus" onChange={(e) => {setImmigrationStatus(e.target.value)}}>
                        <option value="SIV">SIV</option>
                        <option value="Evacuee">Evacuee</option>
                        <option value="Parolee">Parolee</option>
                        <option value="Asylee">Asylee</option>
                        <option value="Diversity Visa Holder">Diversity Visa Holder</option>
                    </select>
                <label for="language">Do you speak English?</label>
                    <select id="language" name="language" onChange={(e) => {setSpeaksEnglish(e.target.value)}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                   </select>
                <input type={"text"} placeholder='Notes About Parent' maxlength='250' onChange={(e) => {setNotes(e.target.value)}}/>
                <input type="submit" value="Submit" onClick={submitHelpForm}></input>
            </form>
            
            {/* render sponsors component at bottom of page. */}
            <Sponsors />
        </div>
    )
}

export default Help
