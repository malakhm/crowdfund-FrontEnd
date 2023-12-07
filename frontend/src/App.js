
import { BrowserRouter as Router } from 'react-router-dom';
import AddCampaign from "./Pages/Creator/Add-campaign/Add-campaign.js"
import AdminCreators from "./Pages/Admin/Admin-creators/Admin-creators.js";
import AdminDonors from "./Pages/Admin/Admin-donors/Admin-donors.js";
import EditProfile from './Components/Profile/Edit-profile.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
// import Profile from '../src/Components/Profile/Profile.js'
// import Cards from '../src/Components/Campaign-card/Campaign-card.js'
import Login from '../src/Pages/Login/Login.js'
// import RegistrationOne from "./Pages/Registration-one/Registration-one.js";
// import RegistrationTwo from "./Pages/Registration-two/Registration-two.js";
// import Home from "./Pages/Home/Home.js";
// import Buttonb from "./Components/Button-black/Button.js";
// import DetailsCard from '../src/Components/Details-card/Details-card.js'
import SideBar from '../src/Components/Side-bar/Side-bar.js'
import DonorMenu from "./Components/Donor-menu/donor-menu";
// import Header from './Components/Header/Header.js'
// import Feed from '../src/Pages/Feed/Feed.js'
// import CreatorProjects from '../src/Pages/Creator/Creator-projects/Creator-projects.js'
// import Notifications from '../src/Pages/Notifications/Notifications.js'
import DonorTransaction from '../src/Pages/Donor/Donor-transaction/Donor-transaction.js'
// import CreatorTransaction from '../src/Pages/Creator/Creator-transaction/Creator-transaction.js'
// import CreatorProfile from '../src/Pages/Creator/Creator-profile/Creator-profile.js'
import RegistrationOne from "./Pages/Registration-one/Registration-one.js";
import RegisterTwo from "./Pages/Registration-two/Registration-two.js";
import Profile from './Components/Profile/Profile.js';
function App() {
  return (
    <Router>
     
      <div className="App">

   
        <SideBar><DonorMenu/></SideBar>
        {/* <RegistrationOne /> */}
        {/* <RegisterTwo /> */}
        {/* <Login /> */}
        {/* <Profile /> */}
        {/* <DonorTransaction /> */}
        {/* <EditProfile /> */}
        <AddCampaign />
    </div>
    </Router>  

  );
}
export default App;