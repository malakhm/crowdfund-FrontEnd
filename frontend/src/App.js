import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../src/Components/Profile/Profile.js'
import SideBar from '../src/Components/Side-bar/Side-bar.js'
import DonorMenu from "./Components/Donor-menu/donor-menu";
import Header from './Components/Header/Header.js'
function App() {
  return (
    <Router>
      <div className="App">
        
        <SideBar><DonorMenu/></SideBar>
          <Profile/>
    </div>
    </Router>
    
  );
}

export default App;
