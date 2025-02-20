import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


// Fetch All SiteSettings
export const getAllSiteSettings = createAsyncThunk(
  "/site/sitesetting",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/sitesetting`, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
            },
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch site Settings.");
    }
  }
);