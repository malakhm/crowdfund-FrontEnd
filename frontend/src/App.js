import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../src/Components/Profile/Profile.js'
function App() {
  return (
    <Router>
      <div className="App">
  <Profile/>
    </div>
    </Router>
    
  );
}

export default App;
