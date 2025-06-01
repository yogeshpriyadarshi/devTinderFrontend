import react from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Setting from "./components/Setting";
import Singup from "./components/Singup";
import Feed from "./components/feed";
import ReceivedConnection from "./components/ReceivedConnection";
import Connection from "./components/Connection";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sinup" element={<Singup />} />
              <Route path="/feed" element={<Feed />} />
              <Route
                path="/receivedconnection"
                element={<ReceivedConnection />}
              />
              <Route path="/connection" element={<Connection />} />

              <Route path="/setting" element={<Setting />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
