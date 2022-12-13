import NavBar from "./Navbar";
import Budget from "./Pages/Budget";
import Home from "./Pages/Home";
import Purchase from "./Pages/Purchase";
import Sell from "./Pages/Sell";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import Tvs from "./Pages/Tvs";
import View from "./Pages/View";
import AddBankAccount from "./Pages/AddBankAccount";
import BuyNow from "./Pages/BuyNow";
import SavedItems from "./Pages/SavedItems";
import CreateBankAccount from "./Pages/CreateBankAccount";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/Budget":
      component = <Budget />;
      break;
    case "/Purchase":
      component = <Purchase />;
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
    case "/SavedItems":
      component = <SavedItems />;
      break;
    case "/CreateBankAccount":
      component = <CreateBankAccount />;
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
