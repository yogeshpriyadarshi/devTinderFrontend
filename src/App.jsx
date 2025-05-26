import react from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
