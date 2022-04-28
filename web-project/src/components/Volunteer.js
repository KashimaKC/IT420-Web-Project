

const Volunteer = () => {


    return (

        <div className="volunteer-container">
            <div className="volunteer-flex-container">
                <div className='volunteer-content'>
                    <div className="flex-content">
                        <h3>United Soccer Program</h3>
                        <p>
                            Starting Point United offers young newcomers the opportunity to play organized soccer in their new country.
                            Our program not only trains our players, but it also helps them build relationships, develop character, stay 
                            physically and emotionally healthy, and be empowered leaders.  
                            The soccer season begins every fall and brings great impact to the lives of our players, their families, 
                            and both the refugee and local communities. 
                            <i> We are in need of people to assist with coaching and team support.  </i>
                        </p>
                    </div>
                </div>
                <div className='volunteer-content'>
                    <div className="flex-content">
                        <h3>SPARK Academic Enrichment Program</h3>
                        <p>
                            SPARK (Summer Program for Arts, Recreation, and Knowledge) provides refugee children with learning opportunities
                            to enhance their education and lives with fun, engaging lessons and field trips.  
                            This program aims to spark new interests and to set the kids on a path to a lifetime of learning.   
                            <i> We are looking for individuals to help with lessons and program development. </i>
                        </p>
                    </div>
                </div>
                <div className='volunteer-content'>
                    <div className="flex-content">
                        <h3>Next Step Shoes</h3>
                        <p>
                            Many refugee children arrive in the U.S. wearing worn-out or poor-fitting shoes, so Starting Point gets our young friends
                            fitted for the perfect pair of new shoes to help them start off on the right foot in comfort. 
                            <i> Help us shop for new footwear for recent arrivals. </i>
                        </p>
                    </div>
                </div>
                <div className='volunteer-content'>
                    <div className="flex-content">
                        <h3>Starting Point Baskets</h3>
                        <p>
                            Refugee families arrive in the U.S. with very few possessions as they begin their new lives. 
                            Help them turn their house into a home by welcoming them with a basket of basic household items. 
                            <i> Learn how you and your friends can assemble a Starting Point Basket <a href='https://www.startingpointworld.com/_files/ugd/6e56dc_a6889a9ca23d409283bb4ad4013f0c96.pdf'>here</a> </i>
                        </p>
                    </div>
                </div>
                <div className='volunteer-content'>
                    <div className="flex-content">
                        <h3>Backpack Project</h3>
                        <p>
                            We all know how education alone can change the course of a child's life. 
                            To help refugee children get off to a successful start, we hand out new backpacks filled with supplies
                            and books when they first arrive to the U.S. and before the beginning of every school year. 
                            Work with friends to put together a backpack for a child in need, hold a school supply drive 
                            at work, or help us at our annual community distribution event. 
                            <i> Learn how you can assemble a backpack <a href='https://www.startingpointworld.com/_files/ugd/6e56dc_3568596cf41048cdace57389f06e5465.pdf'>here</a></i>
                        </p>
                    </div>
                </div>
                <div className='volunteer-content'>
                    <div className="flex-content">
                        <h3>English Classes</h3>
                        <p>
                            More info coming soon!
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="form-header">
                <div className="flex-content">
                    <h3>Other Skills</h3>
                    <p>
                        If you have skills that you would like to offer, please contact us! 
                        We are presently in need of volunteers to pick up and deliver items, apply for grants, and be a venue host.
                    </p>
                </div>
            </div>
            
            
            {/* consider making this form a separate component */}

            <form action="/action_page.php" className='volunteer-form-container'>
                <input type={'text'} placeholder='First name'
                    value={this.state.fname}
                    onChange={e => this.setSate({ fname: e.target.value})}/>
                <input type=" text" id="lname" name="lastname" placeholder="Last name"
                    value={this.state.lname}
                    onChange={e => this.setState({ lname: e.target.value })}/>
                <input type="email" id="email" name="email" placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}/>
                <input type="tel" id="phone" name="phone" placeholder="Phone"
                    value={this.state.phone}
                    onChange={e => this.setState({ phone: e.target.value })}/>
                <input type="text" id="msg" name="msg" placeholder="Volunteer oportunities you are interested in"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}/>
                <input type={'submit'} value='Submit' onClick={e => this.handleFormSubmit(e)}/>

                <div>
                    {this.state.mailSent &&
                        <div>Thank you for contcting us.</div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Volunteer