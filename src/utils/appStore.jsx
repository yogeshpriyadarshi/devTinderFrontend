import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import chatReducer from "./chatSlice";
const appStore = configureStore({
  reducer: { user: userReducer, feed: feedReducer, chat: chatReducer },
});

export default appStore;
