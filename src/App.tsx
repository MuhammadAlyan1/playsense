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
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/match-analytics" element={<MatchAnalytics />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/feedback-hub" element={<FeedbackHub />} />
              <Route path="/game-database" element={<GameDatabase />} />
              <Route
                path="/game-database/legends/:legendName"
                element={<Legend />}
              />
              <Route path="/skillify" element={<Skillify />} />
              <Route path="/post/:postId" element={<PostComments />} />
              <Route
                path="/feedback/:feedbackId"
                element={<FeedbackWithComments />}
              />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
