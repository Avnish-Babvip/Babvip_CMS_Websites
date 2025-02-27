import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


export const getHelpCenter = createAsyncThunk(
    "/site/helpdata",
    async (_, { rejectWithValue }) => {
      try {
          const {data} = await instance.get(`/site/helpdata`, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
              },
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to fetch help data.");
      }
    }
  );