import Nav from './components/Nav.js'
import './components/css/navbar.css'
import './components/css/home.css'
import './components/css/sponsors.css'
import './components/css/donate.css'
import './components/css/request-help.css'
import './components/css/volunteer.css'

function App() {

  return (
    <div className="App">
      { /* changing this so that the body content is derived from the Nav
          render to simplify page switching. */ }
      <Nav />
    </div>
  );
}

export default App;
