import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


export const getTeam = createAsyncThunk(
    "/site/latestteam",
    async (_, { rejectWithValue }) => {
      try {
          const {data} = await instance.get(`/site/latestteam`, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
              },
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to fetch team.");
      }
    }
  );