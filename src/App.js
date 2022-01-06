import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddPackage from './pages/AddPackage/AddPackage';
import Booking from './pages/Booking/Booking';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import LogIn from './pages/LogIn/LogIn/LogIn';
import PrivateRoute from './pages/LogIn/PrivateRoute/PrivateRoute';
import ManagePackage from './pages/ManagePackage/ManagePackage';
import MyPackages from './pages/MyPackages/MyPackages';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return ( 
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/addpackage">
            <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/booking/:place">
            <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/mypackages">
              <MyPackages></MyPackages>
            </PrivateRoute>
            <PrivateRoute path="/managepackages">
              <ManagePackage></ManagePackage>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
