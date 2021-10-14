import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import Notfound from './Pages/Notfound/Notfound';
import Experts from './Pages/Home/Experts/Experts';
import Header from './Pages/Header/Header';
import Booking from './Pages/Booking/Booking';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route path="/services">
             <Services></Services>
         </Route>
         <Route path="/experts">
             <Experts></Experts>
         </Route>
         <Route path="/booking/:userId">
           <Booking></Booking>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
