import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../src/Components/Profile/Profile.js'
import Login from '../src/Pages/Login/Login.js'
import RegistrationOne from "./Pages/Registration-one/Registration-one.js";
import RegistrationTwo from "./Pages/Registration-two/Registration-two.js";
import Home from "./Pages/Home/Home.js";
import Buttonb from "./Components/Button-black/Button.js";
import AddCampaign from "./Pages/Creator/Add-campaign/Add-campaign.js";
import SideBar from "../src/Components/Side-bar/Side-bar.js";
function App() {
  return (
    <Router>
      <div className="App">
   
      {/* <Buttonb>Yes, delete</Buttonb> */}
      <SideBar />
      <AddCampaign />
    </div>
    </Router>
    
  );
}

export default App;
