import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/user" element={ <UserDashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
