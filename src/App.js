import NavBar from "./Navbar";
import Budget from "./Pages/Budget";
import Home from "./Pages/Home";
import Purchase from "./Pages/Purchase";
import Sell from "./Pages/Sell";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
    default:
      console.log("Opps there is an error");
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  );
}

export default App;
