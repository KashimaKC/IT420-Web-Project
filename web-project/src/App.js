import Nav from './components/Nav.js'
import Body from './components/Body.js'
import Home from './components/Home.js'
import './components/css/navbar.css'
import { useState } from 'react'

function App() {

  //creates a state handler to change when called, sets the default state to the Home component. 
  const [content, changeBodyContent] = useState(<Home />);

  //this function is called when the home button is pressed, look into passing arguments to repeat creation of functions
  const setContentHome = () => {
    
    changeBodyContent(<Home />);

  }

  return (
    <div className="App">
      <Nav onClick={setContentHome}/>
      
      {content}

    </div>
  );
}

export default App;
