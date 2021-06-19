import './App.css';
import { Router, Redirect } from '@reach/router'
import Home from './screens/home'
import Notifications from './screens/notifications'
import Messages from './screens/messages'
import Dashboard from './screens/dashboard'
import Profile from './screens/profile'
import Layout from './layout'

const NotFound = () => <div>Not Found</div>

function App() {
  return (
    <Layout >
      <div className="App">
        <Router style={{width: '100%'}}>
          <Redirect from="/" to="/dashboard" noThrow />

          <Home            path="/" />
          <Notifications   path="/notifications" />
          <Messages        path="/messages" />
          <Dashboard       path="/dashboard" />
          <Profile         path="/profile" />                 
          <NotFound        default />
        </Router>
      </div>
    </Layout>
  );
}

export default App;
