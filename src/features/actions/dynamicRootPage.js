import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


// Fetch All Home data
export const getRouteDataBySlug = createAsyncThunk(
  "/site/routeData",
  async (slug, { rejectWithValue }) => {
    try {
        // const {data} = await instance.get(`/site/ishomepage`, {
        const {data} = await instance.get(`/site/pagedata/${slug}`, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
            },
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch home data.");
    }
  }
);