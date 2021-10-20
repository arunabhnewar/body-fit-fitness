import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Menubar from './Pages/Shared/Menubar/Menubar';
import Program from './Pages/Program/Program';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Trainer from './Pages/Trainer/Trainer';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App p-0 m-0">
      <AuthProvider>
        <Router>
          <Menubar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/trainer">
              <Trainer />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <PrivateRoute path="/program/:programId">
              <Program />
            </PrivateRoute>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
