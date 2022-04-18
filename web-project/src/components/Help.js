import Sponsors from "./Sponsors"

// this component renders the request help page


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
                <input type={'text'} placeholder='First and last name'></input>
                <input type={'text'} placeholder='Address'></input>
                <input type={'tel'} placeholder='Phone Number'></input>
                <input type={'text'} placeholder='Country of origin'></input>
                <input type={'date'} placeholder='Date arrived in US'></input>
                <input type={'text'} placeholder='Immigration status'></input>
                <input type={'text'} placeholder='Do you speak english'></input>
                <input type={'text'} placeholder='What is the gender and age of each child?'></input>

                <input type={'submit'} value='Submit'></input>
            </form>

            {/* render sponsors component at bottom of page. */}
            <Sponsors />
        </div>
    )
}

export default Help