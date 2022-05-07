import Sponsors from "./Sponsors";
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

    //Child 1
    const [childFirstName1, setFName1] = useState(null);
    const [age1, setAge1] = useState(null);
    const [gender1, setGender1] = useState(null);
    const [shoe1, setShoeSize1] = useState(null);
    const [childNotes1, setChildNotes1] = useState(null);

    //Child 2
    const [childFirstName2, setFName2] = useState(null);
    const [age2, setAge2] = useState(null);
    const [gender2, setGender2] = useState(null);
    const [shoe2, setShoeSize2] = useState(null);
    const [childNotes2, setChildNotes2] = useState(null);

    //Child 3
    const [childFirstName3, setFName3] = useState(null);
    const [age3, setAge3] = useState(null);
    const [gender3, setGender3] = useState(null);
    const [shoe3, setShoeSize3] = useState(null);
    const [childNotes3, setChildNotes3] = useState(null);

    //Child 4
    const [childFirstName4, setFName4] = useState(null);
    const [age4, setAge4] = useState(null);
    const [gender4, setGender4] = useState(null);
    const [shoe4, setShoeSize4] = useState(null);
    const [childNotes4, setChildNotes4] = useState(null);

    //Child 5
    const [childFirstName5, setFName5] = useState(null);
    const [age5, setAge5] = useState(null);
    const [gender5, setGender5] = useState(null);
    const [shoe5, setShoeSize5] = useState(null);
    const [childNotes5, setChildNotes5] = useState(null);

    //Child 6
    const [childFirstName6, setFName6] = useState(null);
    const [age6, setAge6] = useState(null);
    const [gender6, setGender6] = useState(null);
    const [shoe6, setShoeSize6] = useState(null);
    const [childNotes6, setChildNotes6] = useState(null);
     
    const submitHelpForm = () => {
        var childrenArray = [{
                childFirstName: childFirstName1, 
                age: age1, 
                gender: gender1, 
                shoe: shoe1, 
                childNotes: childNotes1
            }, {
                childFirstName: childFirstName2, 
                age: age2, 
                gender: gender2, 
                shoe: shoe2, 
                childNotes: childNotes2
            }, {
                childFirstName: childFirstName3, 
                age: age3, 
                gender: gender3, 
                shoe: shoe3, 
                childNotes: childNotes3
            }, {
                childFirstName: childFirstName4, 
                age: age4, 
                gender: gender4, 
                shoe: shoe4, 
                childNotes: childNotes4
            }, {
                childFirstName: childFirstName5, 
                age: age5, 
                gender: gender5, 
                shoe: shoe5, 
                childNotes: childNotes5
            }, {
                childFirstName: childFirstName6, 
                age: age6, 
                gender: gender6, 
                shoe: shoe6, 
                childNotes: childNotes6
            }
        ]
        const childArr = JSON.stringify(childrenArray);
        axios.post('http://localhost:3001/', {lastName: lastName, firstName: firstName, address: address, 
                                                street: street, apartment: apartment, city: city, 
                                                zipcode: zipcode, phone: phone, dateOfArrival: dateOfArrival, 
                                                dateReceived: dateReceived, countryOfOrigin: countryOfOrigin, 
                                                immigrationStatus: immigrationStatus, speaksEnglish: speaksEnglish, notes: notes, 
                                                children: childArr
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
                        <option value="Other">Other</option>
                        <option value="SIV">SIV</option>
                        <option value="Evacuee">Evacuee</option>
                        <option value="Parolee">Parolee</option>
                        <option value="Asylee">Asylee</option>
                        <option value="Diversity Visa Holder">Diversity Visa Holder</option>
                    </select>
                <label for="language">Do you speak English?</label>
                    <select id="language" name="language" onChange={(e) => {setSpeaksEnglish(e.target.value)}}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                   </select>
                <input type={"text"} placeholder='Notes About Parent' maxlength='250' onChange={(e) => {setNotes(e.target.value)}}/>

                <label for="Children">Fill out the forms for as many children that you have:</label>

                <div className="child-add-form">
                    <div className="input-field">
                        <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => {setFName1(e.target.value)}}/>
                        <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge1(e.target.value)}}/>
                        <label for="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={(e) => setGender1(e.target.value)}>
                                <option value="No Reponse">No Response</option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        <input type={"number"} placeholder='Shoe Size:' min='0' max='16' required onChange={(e) => {setShoeSize1(e.target.value)}}/>
                        <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes1(e.target.value)}}/>
                    </div>

                    <div className="input-field">
                        <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => {setFName2(e.target.value)}}/>
                        <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge2(e.target.value)}}/>
                        <label for="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={(e) => setGender2(e.target.value)}>
                                <option value="No Reponse">No Response</option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        <input type={"number"} placeholder='Shoe Size:' min='0' max='16' onChange={(e) => {setShoeSize2(e.target.value)}}/>
                        <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes2(e.target.value)}}/>
                    </div>

                    <div className="input-field">
                        <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => {setFName3(e.target.value)}}/>
                        <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge3(e.target.value)}}/>
                        <label for="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={(e) => setGender3(e.target.value)}>
                                <option value="No Reponse">No Response</option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        <input type={"number"} placeholder='Shoe Size:' min='0' max='16' onChange={(e) => {setShoeSize3(e.target.value)}}/>
                        <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes3(e.target.value)}}/>
                    </div>  

                    <div className="input-field">
                        <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => {setFName4(e.target.value)}}/>
                        <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge4(e.target.value)}}/>
                        <label for="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={(e) => setGender4(e.target.value)}>
                                <option value="No Reponse">No Response</option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        <input type={"number"} placeholder='Shoe Size:' min='0' max='16' onChange={(e) => {setShoeSize4(e.target.value)}}/>
                        <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes4(e.target.value)}}/>
                    </div>     

                    <div className="input-field">
                        <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => {setFName5(e.target.value)}}/>
                        <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge5(e.target.value)}}/>
                        <label for="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={(e) => setGender5(e.target.value)}>
                                <option value="No Reponse">No Response</option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        <input type={"number"} placeholder='Shoe Size:' min='0' max='16' onChange={(e) => {setShoeSize5(e.target.value)}}/>
                        <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes5(e.target.value)}}/>
                    </div>        

                    <div className="input-field">
                        <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => {setFName6(e.target.value)}}/>
                        <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge6(e.target.value)}}/>
                        <label for="gender">Gender:</label>
                            <select id="gender" name="gender" onChange={(e) => setGender6(e.target.value)}>
                                <option value="No Reponse">No Response</option>
                                <option value="F">F</option>
                                <option value="M">M</option>
                            </select>
                        <input type={"number"} placeholder='Shoe Size:' min='0' max='16' onChange={(e) => {setShoeSize6(e.target.value)}}/>
                        <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes6(e.target.value)}}/>
                    </div>     
                </div>

                <input type="submit" value="Submit" onClick={submitHelpForm}></input>
            </form>
            
            {/* render sponsors component at bottom of page. */}
            <Sponsors />
        </div>
    )
}

export default Help