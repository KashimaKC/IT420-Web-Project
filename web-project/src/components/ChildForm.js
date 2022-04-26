
const ChildForm = ( { childTitle } ) => {

    return (
        <div className="input-field">
            <h3> {childTitle} </h3>
            <input type={"text"} placeholder='First Name:'></input>
            <input type={"number"} placeholder='Age:'></input>
            <input type={"text"} placeholder='Gender:'></input>
        </div>
    )
}

export default ChildForm