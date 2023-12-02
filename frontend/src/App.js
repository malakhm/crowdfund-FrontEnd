import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../src/Components/Profile/Profile.js'
import Cards from '../src/Components/Campaign-card/Campaign-card.js'
import Login from '../src/Pages/Login/Login.js'
import RegistrationOne from "./Pages/Registration-one/Registration-one.js";
import RegistrationTwo from "./Pages/Registration-two/Registration-two.js";
import Home from "./Pages/Home/Home.js";
import Buttonb from "./Components/Button-black/Button.js";

import SideBar from '../src/Components/Side-bar/Side-bar.js'
import DonorMenu from "./Components/Donor-menu/donor-menu";
import Header from './Components/Header/Header.js'
import Feed from '../src/Pages/Feed/Feed.js'
import CreatorProjects from '../src/Pages/Creator/Creator-projects/Creator-projects.js'
function App() {
  return (
    <Router>
      <div className="App">

   
        <SideBar><DonorMenu/></SideBar>

        <CreatorProjects/>
    </div>
    </Router>
    
  );
}

export default App;
