import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import axios from "axios";


// Fetch three Blogs
export const getLatestThreeBlogs = createAsyncThunk(
  "site/latestThreeBlogs",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/latestthreeblogs`, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
            },
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch blogs.");
    }
  }
);

//Fetch 11 blogs in one page
export const getPaginateBlogs = createAsyncThunk(
  "site/paginateBlogs",
  async (url, { rejectWithValue }) => {
    try {
        const {data} = await axios.get(url, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
            },
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch blogs.");
    }
  }
);


// Fetch Blogs by slug
export const getBlogsBySlug = createAsyncThunk(
  "/site/blogdetails/",
  async (slug, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/blogdetails/${slug}`, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
            },
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch blogs.");
    }
  }
);