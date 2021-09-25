import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BookPage from "./pages/BookPage";
import BookReservationPage from "./pages/BookReservationPage";
import MemberPage from "./pages/MemberPage";
import EmployeePage from "./pages/EmployeePage";
import SubscriptionPage from "./pages/SubscriptionPage";

function App() {

       
  
  return (
    <Router>
      <Header>
       
        </Header>
              <Switch>
          <Route path="/books" component={BookPage} />
          <Route path="/bookReservation" component={BookReservationPage} />          
          <Route path="/members" component={MemberPage} />
          <Route path="/employees" component={EmployeePage} />
          <Route path="/subscriptions" component={SubscriptionPage} />
            
          <Route path="/">
           Home page 
          </Route>
        </Switch>
      

    </Router>
  );
}

export default App;
