import NavBar from "./Navbar";
import Home from "./Pages/Home";
import Sell from "./Pages/Sell";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import Tvs from "./Pages/Tvs";
import View from "./Pages/View";
import AddBankAccount from "./Pages/AddBankAccount";
import BuyNow from "./Pages/BuyNow";
import Listings from "./Pages/Listings";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/Sell":
      component = <Sell />;
      break;
    case "/Login":
      component = <Login />;
      break;
    case "/Signup":
      component = <Signup />;
      break;
    case "/Account":
      component = <Account />;
      break;
    case "/Tvs":
      component = <Tvs />;
      break;
    case "/View":
      component = <View />;
      break;
    case "/AddBankAccount":
      component = <AddBankAccount />;
      break;
    case "/BuyNow":
      component = <BuyNow />;
      break;
    case "/Listings":
      component = <Listings />;
      break;
    default:
      console.log("Sucess");
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;
