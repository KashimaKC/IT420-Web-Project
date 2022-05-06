import { useState, useEffect } from "react";
const ChildForm = (props) => {
    const [childFirstName, setFName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(null);
    const [shoe, setShoeSize] = useState(null);
    const [childNotes, setChildNotes] = useState('');


    // const setFirstName = (e) => {
    //     props.sampleSet(e.target.value);
    // }

    

    return (
        <div className="input-field">
            <h3> {props.childTitle} </h3>
            <input type={"text"} placeholder='First Name:' maxlength='250' onChange={(e) => props.sampleSet(e)}/>
            <input type={"number"} placeholder='Age:' min='0' max='25' onChange={(e) => {setAge(e.target.value)}}/>
            <label for="gender">Gender:</label>
                <select id="gender" name="gender" onChange={(e) => setGender(e)}>
                    <option value="No Reponse">No Response</option>
                    <option value="F">F</option>
                    <option value="M">M</option>
                </select>
            <input type={"number"} placeholder='Shoe Size:' min='0' max='16' required onChange={(e) => {setShoeSize(e.target.value)}}/>
            <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={(e) => {setChildNotes(e.target.value)}}/>
            
        </div>
    )
}

export default ChildForm