import react from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Setting from "./components/Setting";
import Feed from "./components/Feed";
import ReceivedConnection from "./components/ReceivedConnection";
import Connection from "./components/Connection";
import SentConnetion from "./components/SentConnetion";
import Login from "./components/auth/Login";
import Profile from "./components/user/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Singup";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/profile/" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/feed" element={<Feed />} />
               <Route path="/sentconnection" element={<SentConnetion />} />
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
