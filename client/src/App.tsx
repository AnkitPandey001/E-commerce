
import { Route, Routes } from "react-router-dom"; 
import Headers from "./components/Headers";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import Protect from "./protectedRoutes/Protect";
import RedirectIfLoggedIn from "./protectedRoutes/RedirectLogin";
import WishList from "./Pages/WishList";
import Order from "./components/Order";
import Profile from "./Pages/Profile";


const App = () => {
  return (
      <div className="w-full min-h-screen">
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}/>
          <Route path="/signup" element={<RedirectIfLoggedIn><Signup/></RedirectIfLoggedIn>}/>
          <Route path="/cart" element={<Protect><Cart/></Protect>}/>
          <Route path="/wishlist" element={<Protect><WishList/></Protect>}/>
          <Route path="/orders" element={<Protect><Order/></Protect>}/>
          <Route path="/profile" element={<Protect><Profile/></Protect>}/>
        </Routes>
      </div>
  );
};

export default App;
