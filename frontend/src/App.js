import { BrowserRouter as Router } from 'react-router-dom';

// import RegistrationOne from "./Pages/Registration-one/Registration-one.js";
// import RegistrationTwo from "./Pages/Registration-two/Registration-two.js";
// import Profile from '../src/Components/Profile/Profile.js'
// import Login from '../src/Pages/Login/Login.js'
// import SendNotification from "./Components/Notification/Notification";
// import Home from "./Pages/Home/Home.js";
// import Buttonb from "./Components/Button-black/Button.js";
import AdminCreators from "./Pages/Admin/Admin-creators/Admin-creators.js";
import AdminDonors from "./Pages/Admin/Admin-donors/Admin-donors.js";
// import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {

  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Buttonb>Yes, delete</Buttonb> */}
        {/* <RegistrationOne />
        <RegistrationTwo /> */}
        {/* <SendNotification/> */}
        <AdminCreators />
        <AdminDonors />
      </div>
    </Router>
  );
}

export default App;
