import Nav from './components/Nav.js'
import './components/css/navbar.css'
import './components/css/home.css'
import './components/css/sponsors.css'
import './components/css/donate.css'
import './components/css/request-help.css'
import './components/css/volunteer.css'
import './components/css/autoslide.css'
import './components/css/about.css'
import React, { Component } from 'react';
import axios from 'axios';
//const API_PATH = 'http://localhost:3000/react-contact-form/api/contact/index.php';
const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php';

class App extends Component {
  
  constructor(props) {
  
    // Calling super class constructor
    super(props);
      
    // Creating state
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      message: '', 
      mailSent: false,
      error: null
    }
    // Binding event handler
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }
  
  render() {
    return (
      <div className="App">
          <Nav/>
      </div>
    );
  }
}
  
export default App;