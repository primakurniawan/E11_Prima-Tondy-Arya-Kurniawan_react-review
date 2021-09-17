import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Message from "./pages/Message";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact_us" component={ContactUs} />
      <Route path="/message" component={Message} />
    </Switch>
  );
}

export default App;
