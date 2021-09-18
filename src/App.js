import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Message from "./pages/Message";
import News from "./pages/News";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact_us" component={ContactUs} />
      <Route path="/message" component={Message} />
      <Route path="/news" component={News} />
    </Switch>
  );
}

export default App;
