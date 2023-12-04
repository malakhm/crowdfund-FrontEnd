
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../src/Components/Side-bar/Side-bar.js'
import DonorMenu from "./Components/Donor-menu/donor-menu";
import Header from './Components/Header/Header.js'
import Profile from "./Components/Profile/Profile.js"
import Support from './Pages/Support/Support.js';

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
