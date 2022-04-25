import Sponsors from "./Sponsors"

// this component renders the request help page
//for the moreKids function: https://www.geeksforgeeks.org/how-to-create-a-form-dynamically-with-the-javascript/

const Help = () => {


    return (
        <div className="help-request-container">
            <h3 className="request-header">
                If you are a newcomer and your children need basic necessities, please complete the form below.
                We will contact you soon with more information about becoming a Starting Point family.
            </h3>

            {/* this is the request help form, feel free to edit this and make changes according to the requirements 
                NOTES:

                    - consider changing the placeholder text with the translated language that is chosen.

                TODO: 

                    - change the immigration status to a drop down for easy selection.
                    - change the language inquiry to a yes / no drop down.
            */}

            <form className="request-help-form">
                <input type={'text'} placeholder='Parent first and last name'></input>
                <input type={'text'} placeholder='Address'></input>
                <input type={'tel'} placeholder="Phone Number"></input>
                <input type={'text'} placeholder='Country of origin'></input>
                <label for="date">Input Date arrived in US:</label>
                <input type={'date'} placeholder='Date arrived in US'></input>
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

                <input type={'submit'} value='Submit'></input>
            </form>

            {/* render sponsors component at bottom of page. */}
            <Sponsors />
        </div>
    )
}

export default Help
