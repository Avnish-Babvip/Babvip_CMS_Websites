import { createSlice } from "@reduxjs/toolkit";
import {  getHelpCenter} from "../actions/helpCenter";


const initialState = {
  isLoading: false,
  helpCenterData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const helpCenterSlice = createSlice({
  name: "helpCenterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
   
      .addCase(getHelpCenter.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getHelpCenter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.helpCenterData = action.payload.data; 
      })
      .addCase(getHelpCenter.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch help center";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = helpCenterSlice.actions;
export default helpCenterSlice.reducer;