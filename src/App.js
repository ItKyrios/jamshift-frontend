import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Shifts from "./pages/Shifts";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import More from "./pages/More";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
      <Router>
        <Routes>
          {/* Pages that use the main layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/more" element={<More />} />
          </Route>

          {/* Auth pages without the main layout could go here if needed */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>    
  );
}

export default App;