const ChildForm = ( { childTitle } ) => {

    return (
        <div className="input-field">
            <h3> {childTitle} </h3>
            <input type={"text"} placeholder='First Name:' maxlength='250'></input>
            <input type={"number"} placeholder='Age:' min='0' max='25'></input>
            <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="F">F</option>
                    <option value="M">M</option>
                </select>
            <input type={"number"} placeholder='Shoe Size:' min='0' max='16' required></input>
            <input type={"text"} placeholder='Notes about your child:' maxlength='250'></input>
        </div>
    )
}

export default ChildForm