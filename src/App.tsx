import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProfile from './components/EditProfile';
import SharedLayout from './components/SharedLayout';
import Profile from './components/profile';
import MatchAnalytics from './components/matchAnalytics';
import Home from './components/home';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Analytics from './components/analytics';
import FeedbackHub from './components/feedbackHub/index';
import GameDatabase from './components/gameDatabase';
import Skillify from './components/skillify';
import PostComments from './components/shared/posts/PostWithComments';
import { AuthProvider } from './context/authContext';
import { Toaster } from 'react-hot-toast';
import FeedbackWithComments from './components/feedbackHub/FeedbackWithComments';
import Legend from './components/gameDatabase/detailedInfo/legend';
import Weapon from './components/gameDatabase/detailedInfo/weapon';
import DashboardSharedLayout from './components/dashboardSharedLayout';
import Orders from './components/dashboard/orders';
import 'react-datepicker/dist/react-datepicker.css';
import Notifications from './components/dashboard/notifications';
import Users from './components/dashboard/users';
import Reports from './components/dashboard/reports';
import Feedbacks from './components/dashboard/feedback';
import DashboardAnalytics from './components/dashboard/dashboardAnalytics';
import Chat from './components/dashboard/chat';
import { ChatProvider } from './context/chatContext';
function App() {
  return (
    <>
      <div className="background-image"></div>
      <Toaster
        toastOptions={{
          duration: 5000,
          position: 'bottom-left',
          style: {
            background: '#333',
            color: '#fff'
          }
        }}
      />
      <BrowserRouter>
        <AuthProvider>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="/profile/:profileId" element={<Profile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/match-analytics" element={<MatchAnalytics />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/feedback-hub" element={<FeedbackHub />} />
                <Route path="/game-database" element={<GameDatabase />} />
                <Route
                  path="/game-database/legends/:legendName"
                  element={<Legend />}
                />
                <Route
                  path="/game-database/weapons/:weaponName"
                  element={<Weapon />}
                />
                <Route path="/skillify" element={<Skillify />} />
                <Route path="/post/:postId" element={<PostComments />} />
                <Route
                  path="/feedback/:feedbackId"
                  element={<FeedbackWithComments />}
                />
              </Route>
              <Route path="/dashboard" element={<DashboardSharedLayout />}>
                <Route index element={<DashboardAnalytics />} />
                <Route path="/dashboard/orders" element={<Orders />} />
                <Route path="/dashboard/chat" element={<Chat />} />
                <Route path="/dashboard/users" element={<Users />} />
                <Route
                  path="/dashboard/notifications"
                  element={<Notifications />}
                />
                <Route path="/dashboard/reports" element={<Reports />} />
                <Route path="/dashboard/feedback" element={<Feedbacks />} />
              </Route>
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </ChatProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
