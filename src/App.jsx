import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Body from "./Component/Body";
import Feed from "./Component/Feed";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Connections from "./Component/Connections";
import Requests from "./Component/Requests";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
