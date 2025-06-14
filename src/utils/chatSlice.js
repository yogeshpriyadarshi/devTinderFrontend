import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
name : "chat",
initialState: null,
reducers: {
    addChat : (state,action)=>{
return action.payload;
    }
}
});

export const {addChat} = chatSlice.actions;
export default chatSlice.reducer;