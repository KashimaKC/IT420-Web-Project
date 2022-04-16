import Nav from './components/Nav.js'
import './components/css/navbar.css'
import './components/css/home.css'

function App() {

  //creates a state handler to change when called, sets the default state to the Home component. 


  return (
    <div className="App">
      { /* changing this so that the body content is derived from the Nav
          render to simplify page switching. check the body.js file for more. */ }
      <Nav />

    </div>
  );
}

export default App;
