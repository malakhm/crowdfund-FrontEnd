import AppRoutes from './routes/Routes.js'

<<<<<<<<< Temporary merge branch 1
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminCreators from "./Pages/Admin/Admin-creators/Admin-creators.js";
import AdminDonors from "./Pages/Admin/Admin-donors/Admin-donors.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Cards from '../src/Components/Campaign-card/Campaign-card.js'
import Login from '../src/Pages/Login/Login.js'
import RegistrationOne from "./Pages/Registration/Registration-one/Registration-one.js";
import RegistrationTwo from "./Pages/Registration/Registration-two/Registration-two.js";
import Home from "./Pages/Home/Home.js";
import Buttonb from "./Components/Button-black/Button.js";
import DetailsCard from '../src/Components/Details-card/Details-card.js'
import SideBar from '../src/Components/Side-bar/Side-bar.js'
import DonorMenu from "./Components/Donor-menu/donor-menu";
import Header from './Components/Header/Header.js'
import Feed from '../src/Pages/Feed/Feed.js'
import CreatorProjects from '../src/Pages/Creator/Creator-projects/Creator-projects.js'
import Notifications from '../src/Pages/Notifications/Notifications.js'
import DonorTransaction from '../src/Pages/Donor/Donor-transaction/Donor-transaction.js'
import CreatorTransaction from '../src/Pages/Creator/Creator-transaction/Creator-transaction.js'
import CreatorProfile from '../src/Pages/Creator/Creator-profile/Creator-profile.js'
import AdminCampaign from '../src/Pages/Admin/Admin-campaign/Admin-campaign.js'
import AdminMessages from '../src/Pages/Admin/Admin-messages/Admin-messages.js'
import AdminRegRequests from '../src/Pages/Admin/Admin-registration-requests/Admin-registration-requests.js'
import AdminRequests from '../src/Pages/Admin/Admin-post-requests/Admin-post-requests.js'
import AdminTransactions from '../src/Pages/Admin/Admin-transactions/Admin-transactions.js'
import AdminAnnouncements from '../src/Pages/Admin/Admin-announcements/Admin-announcements.js'

import AdminMenu from '../src/Components/Admin-menu/admin-menu.js';


=========
>>>>>>>>> Temporary merge branch 2
const App = () => {
  return (
   
      <div className="App">
<<<<<<<<< Temporary merge branch 1

        <SideBar><AdminMenu /></SideBar>

        <SideBar><DonorMenu /></SideBar>

        <Routes>
          <Route
            path="/admin/donors"
            element={<AdminDonors />
            }
          />

          <Route
            path="/admin/creators"
            element={<AdminCreators />
            }
          />

          <Route
            path="/admin/campaigns"
            element={<AdminCampaign />
            }
          />

          <Route
            path="/admin/messages"
            element={<AdminMessages />
            }
          />

          <Route
            path="/admin/reg/requests"
            element={<AdminRegRequests />
            }
          />
          <Route
            path="/admin/post/requests"
            element={<AdminRequests />
            }
          />
          {/* <Route
            path="/admin/reg/requests"
            element={user && (user.usertype ==="project" || )?<AdminRegRequests />}
          /> */}

         
          <Route
            path="/admin/transactions"
            element={<AdminTransactions />
            }
          />
          <Route
            path="/admin/anouncements"
            element={<AdminAnnouncements />
            }
          />

          <Route
            path="/admin/logout"
            
          />
          <Route
            path="/feed"
            element={<Feed />}
          />

          {/* <Route
            path="/profile"
            element={<Profile />}
          /> */}
       

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/donor/transactions"
            element={<DonorTransaction />}
          />
          <Route
            path="/details"
            element={<DetailsCard />}
          />
          
        </Routes>
=========
        <AppRoutes/>
>>>>>>>>> Temporary merge branch 2
      </div>
  

  );
};
export default App;
