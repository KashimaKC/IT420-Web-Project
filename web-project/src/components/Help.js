import Sponsors from "./Sponsors"
import ChildForm from "./ChildForm";
import { useState } from "react";


// this component renders the request help page

const Help = () => {

    const [childField, setChildrenState] = useState(null);

    // this definitely isnt optimized but it will work... I think

    const addChild = (e) => {

        // I am so sorry gods of javascript, please forgive me.

        switch (e.target.value) {
            case '1' :
                setChildrenState(
                    <>
                        <ChildForm childTitle={'Child 1'} />
                    </>
                )
                break;
            case '2' :
                setChildrenState(
                    <>
                        <ChildForm childTitle={'Child 1'}/>
                        <ChildForm childTitle={'Child 2'}/>
                    </>
                )
                break;
            case '3' :
                setChildrenState(
                    <>
                        <ChildForm childTitle={'Child 1'}/>
                        <ChildForm childTitle={'Child 2'}/>
                        <ChildForm childTitle={'Child 3'}/>
                    </>
                )
                break;
            case '4' :
                setChildrenState(
                    <>
                        <ChildForm childTitle={'Child 1'}/>
                        <ChildForm childTitle={'Child 2'}/>
                        <ChildForm childTitle={'Child 3'}/>
                        <ChildForm childTitle={'Child 4'}/>
                    </>
                )
                break;
            case '5' :
                setChildrenState(
                    <>
                        <ChildForm childTitle={'Child 1'}/>
                        <ChildForm childTitle={'Child 2'}/>
                        <ChildForm childTitle={'Child 3'}/>
                        <ChildForm childTitle={'Child 4'}/>
                        <ChildForm childTitle={'Child 5'}/>
                    </>
                )
                break;
            case '6' :
                setChildrenState(
                    <>
                        <ChildForm childTitle={'Child 1'}/>
                        <ChildForm childTitle={'Child 2'}/>
                        <ChildForm childTitle={'Child 3'}/>
                        <ChildForm childTitle={'Child 4'}/>
                        <ChildForm childTitle={'Child 5'}/>
                        <ChildForm childTitle={'Child 6'}/>
                    </>
                )
                break;
            case 'other' :
            default: 
                setChildrenState(null)
        }
    }

    return (
        <div className="help-request-container">
            <h3 className="request-header">
                If you are a newcomer and your children need basic necessities, please complete the form below.
                We will contact you soon with more information about becoming a Starting Point family.
            </h3>

            <form className="request-help-form">
                <input type={'text'} placeholder='Parent Last Name' maxlength='250'></input>
                <input type={'text'} placeholder='Parent First Name' maxlength='250'></input>
                <input type={'text'} placeholder='Street Number - example: 2311' maxlength='10'></input>
                <input type={'text'} placeholder='Street Name - example: Hamlet Way' maxlength='250'></input>
                <input type={'text'} placeholder='Apt/Suite/Unit/Building/Floor - example: Apt. 4' maxlength='20'></input>
                <input type={'text'} placeholder='City - example: Manhattan' maxlength='25'></input>
                <input type={'text'} placeholder='Postal Code - example: 80456' maxlength='15'></input>
                <input type={'tel'} placeholder="Phone Number"></input>
                <label for="date">Input Date arrived in US:</label>
                <input type={'date'} placeholder='Date arrived in US'></input>
                <input type={'text'} placeholder='Country of Origin - example: Afghanistan' maxlength='250'></input>
                <label for="Status">Select an Immigration Status:</label>
                    <select id="status" name="status">
                        <option value="SIV">SIV</option>
                        <option value="Evacuee">Evacuee</option>
                        <option value="Parolee">Parolee</option>
                        <option value="Asylee">Asylee</option>
                        <option value="Diversity Visa Holder">Diversity Visa Holder</option>
                    </select>
                <label for="language">Do you speak English?</label>
                    <select id="language" name="language">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                   </select>
                <input type={"text"} placeholder='Notes About Parent' maxlength='250'></input>
                <label for="children">How many children do you have?</label>
                    <select id="children" name="children" onChange={addChild}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={"other"}>Other</option>
                    </select>
                <div className="child-add-form">
                    {childField}
                </div>

                <input type={'submit'} value='Submit'></input>
            </form>

            {/* render sponsors component at bottom of page. */}
            <Sponsors />
        </div>
    )
}

export default Help
