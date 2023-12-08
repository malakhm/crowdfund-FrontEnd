
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminCreators from "../Pages/Admin/Admin-creators/Admin-creators.js";
import AdminDonors from "../Pages/Admin/Admin-donors/Admin-donors.js";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css'
import Login from '../../src/Pages/Login/Login.js'
import DetailsCard from '../Components/Details-card/Details-card.js'
import SideBar from '../Components/Side-bar/Side-bar.js'
import DonorMenu from "../Components/Donor-menu/donor-menu";
import Feed from '../Pages/Feed/Feed.js'
import CreatorProjects from '../Pages/Creator/Creator-projects/Creator-projects.js'
import Notifications from '../Pages/Notifications/Notifications.js'
import DonorTransaction from '../../src/Pages/Donor/Donor-transaction/Donor-transaction.js'
import CreatorTransaction from '../../src/Pages/Creator/Creator-transaction/Creator-transaction.js'
import Profile from '../Pages/Profile/Profile.js'
import AdminCampaign from '../../src/Pages/Admin/Admin-campaign/Admin-campaign.js'
import AdminMessages from '../../src/Pages/Admin/Admin-messages/Admin-messages.js'
import AdminRegRequests from '../../src/Pages/Admin/Admin-registration-requests/Admin-registration-requests.js'
import AdminRequests from '../../src/Pages/Admin/Admin-post-requests/Admin-post-requests.js'
import AdminTransactions from '../../src/Pages/Admin/Admin-transactions/Admin-transactions.js'
import AdminAnnouncements from '../../src/Pages/Admin/Admin-announcements/Admin-announcements.js'
import AdminMenu from '../../src/Components/Admin-menu/admin-menu.js';
import ProtectedRoute from './ProtectedRoutes.js'
import CreatorMenu from '../Components/Creator-menu/creator-menu.js';
import AdminLogin from '../Pages/Login/LoginAdmin.js'
import Home from '../Pages/Home/Home.js'
import  RegistrationOne from '../Pages/Registration/Registration-one/Registration-one.js';
import  RegistrationTwo from '../Pages/Registration/Registration-two/Registration-two.js'

const AppRoutes = () => {
    return (
        // <Routes>
        //     <Route exact path="/" element={<Home />} />
        //     <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        //         <Route path="/dashboard" element={<Dashboard />} />
        //     </Route>
        //     <Route path="/login" element={<LoginPage />} />
        //     <Route path="/unauthorized" element={<Unauthorized />} />
        //     <Route path="/*" element={<NotFound />} />
        // </Routes>
<>

        <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/donors"
            element={<AdminDonors />
            }
          />
          </Route>
          <Route element={<ProtectedRoute />}>
          <Route
            path="/registration1"
            element={<RegistrationOne />}
          />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route
            path="/registration2"
            element={<RegistrationTwo />}
          />
          </Route>

          <Route
            path="/user/login"
            element={<Login />
            }
          />
          <Route
            path="/admin/login"
            element={<AdminLogin />
            }
          />
          {/* <Route path='/' element={<Layout/>}> */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin/creators"
              element={<AdminCreators />
              }
            />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin/campaigns"
              element={<AdminCampaign />
              }
            />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/messages"
            element={<AdminMessages />
            }
          />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/reg/requests"
            element={<AdminRegRequests />
            }
          />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/post/requests"
            element={<AdminRequests />
            }
          />
          </Route>

          {/* <Route
            path="/admin/reg/requests"
            element={user && (user.usertype ==="project" || )?<AdminRegRequests />}
          /> */}

          <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/transactions"
            element={<AdminTransactions />
            }
          />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route
            path="/admin/anouncements"
            element={<AdminAnnouncements />
            }
          />
          </Route>
          {/* </Route> */}
{/* ----------------------------------------- */}

            <Route
            path="/"
            element={<Home />
            }
          />
   \
          <Route element={<ProtectedRoute />}>
          <Route
            path="/feed"
            element={<Feed />}
          />
          </Route>
          <Route element={<ProtectedRoute />}>
          <Route
            path="/profile"
            element={<Profile />}
          />
          </Route>


          <Route element={<ProtectedRoute />}>
          <Route
            path="/notifications"
            element={<Notifications />}
          />
          </Route>

          <Route >
          <Route
            path="/donor/transactions"
            element={<DonorTransaction />}
          />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route 
            path='/creator/projects'
            element={CreatorProjects}
            />
          </Route>

          <Route element={<ProtectedRoute />}>
          <Route
            path="/transactions"
            element={<CreatorTransaction />}
          />
          </Route>
          <Route element={<ProtectedRoute />}>
          <Route
            path="/details"
            element={<DetailsCard />}
          />
          </Route>


        </Routes>
        </>
    );
};

export default AppRoutes;