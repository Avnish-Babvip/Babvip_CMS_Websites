import { createSlice } from "@reduxjs/toolkit";
import { getAllHomeData } from "../actions/home";


const initialState = {
  isLoading: false,
  homeData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Get Banners
      .addCase(getAllHomeData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllHomeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.homeData = action.payload;

      })
      .addCase(getAllHomeData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = homeSlice.actions;
export default homeSlice.reducer;