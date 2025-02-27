import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import axios from "axios";

const getCsrfToken = async () => {
    const response = await instance.get("/site/csrf-token");
    return response.data.csrf_token;
  };  
  
const csrfToken = await getCsrfToken();

const getIpAddress = async () => {
    const response = await axios.get("https://api64.ipify.org/?format=json");
    return response.data.ip;
  };  

const ipAddress = await getIpAddress();  


export const addContactDetails = createAsyncThunk(
    "/site/savecontactenquiry",
    async (payload, { rejectWithValue }) => {
      try {
          const {data} = await instance.post(`/site/savecontactenquiry`, {...payload,ip_address:ipAddress}, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                "X-CSRF-TOKEN": await getCsrfToken(),
              },
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to post contact details.");
      }
    }
  );
export const addMaintenanceEnquiry = createAsyncThunk(
    "/site/savemaintinanceenquiry",
    async (payload, { rejectWithValue }) => {
      try {
          const {data} = await instance.post(`/site/savemaintinanceenquiry`, {...payload,ip_address:ipAddress}, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
              },
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to post maintenance enquiry.");
      }
    }
  );
export const addNewsletter = createAsyncThunk(
    "/site/savenewsletterapi",
    async (payload, { rejectWithValue }) => {
      try {
          const {data} = await instance.post(`/site/savenewsletterapi`, {...payload,ip_address:ipAddress}, {
              withCredentials: false,
              headers: {
                "Content-type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
              },
            });
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Failed to post newletter");
      }
    }
  );
