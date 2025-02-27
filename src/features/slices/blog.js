import { createSlice } from "@reduxjs/toolkit";
import {  getBlogsBySlug, getLatestThreeBlogs, getPaginateBlogs } from "../actions/blog";


const initialState = {
  isLoading: false,
  blogData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

 const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
   
      .addCase(getLatestThreeBlogs.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getLatestThreeBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.blogData = action.payload.data; 
      })
      .addCase(getLatestThreeBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })
      .addCase(getPaginateBlogs.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getPaginateBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.blogData = action.payload.data; 
      })
      .addCase(getPaginateBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })
      .addCase(getBlogsBySlug.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getBlogsBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.blogData = action.payload.data; 
      })
      .addCase(getBlogsBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload || "Failed to fetch head menu.";
      })

  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = blogSlice.actions;
export default blogSlice.reducer;