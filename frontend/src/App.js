
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../src/Components/Side-bar/Side-bar.js'
import DonorMenu from "./Components/Donor-menu/donor-menu";
import Header from './Components/Header/Header.js'
import Profile from "./Components/Profile/Profile.js"
import Support from './Pages/Support/Support.js';
import RegistrationOne from "./Pages/Registration/Registration-one/Registration-one.js";
import Notifications from './Pages/Notifications/Notifications.js'
 import DonorTransaction from './Pages/Donor/Donor-transaction/Donor-transaction.js';
 import RegistrationTwo from './Pages/Registration/Registration-two/Registration-two.js'
function App() {
  return (
    <Router>
      <div className="App">

        <SideBar><DonorMenu/></SideBar>
          {/* <Profile/> */}
          <RegistrationOne/>
          <RegistrationTwo/>
          {/* <DonorTransaction/> */}
       </div>
    </Router>
    
  );
}

export default App;
