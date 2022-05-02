import { useState, useEffect } from "react";
const ChildForm = ( { childTitle }, e ) => {

    const [childFirstName, setFName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [shoe, setShoeSize] = useState('')
    const [childNotes, setChildNotes] = useState('')

    return (
        <div className="input-field">
            <h3> {childTitle} </h3>
            <input type={"text"} placeholder='First Name:' maxlength='250' onChange={() => {
                    setFName(e.target.value)
            }}></input>
            <input type={"number"} placeholder='Age:' min='0' max='25' onChange={() => {
                    setAge(e.target.value)
            }}></input>
            <label for="gender">Gender:</label>
                <select id="gender" name="gender" onChange={() => {
                    setGender(e.target.value)
                }}>
                    <option value="F">F</option>
                    <option value="M">M</option>
                </select>
            <input type={"number"} placeholder='Shoe Size:' min='0' max='16' required onChange={() => {
                    setShoeSize(e.target.value)
            }}></input>
            <input type={"text"} placeholder='Notes about your child:' maxlength='250' onChange={() => {
                    setChildNotes(e.target.value)
            }}></input>
        </div>
    )
}

export default ChildForm