import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


// Fetch All Home data
export const getAllHomeData = createAsyncThunk(
  "/site/ishomepage",
  async (_, { rejectWithValue }) => {
    try {
        // const {data} = await instance.get(`/site/ishomepage`, {
        const {data} = await instance.get(`/site/pagedata/test-page`, {
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