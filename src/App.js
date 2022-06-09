import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// components
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <ProtectedRoute path="/">
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
