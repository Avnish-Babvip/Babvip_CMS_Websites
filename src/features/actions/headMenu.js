import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


// Fetch All HeadMenu
export const getAllHeadMenu = createAsyncThunk(
  "site/headmenu",
  async (_, { rejectWithValue }) => {
    try {
        const {data} = await instance.get(`/site/headmenu`, {
            withCredentials: false,
            headers: {
              "Content-type": "application/json",
            },
          });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Failed to fetch headmenu.");
    }
  }
);