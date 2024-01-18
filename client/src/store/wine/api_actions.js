import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:8080/wine";

export const GetAll = createAsyncThunk("GetAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
export const GetById = createAsyncThunk("GetById", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
export const AddNew = createAsyncThunk(
  "AddNew",
  async ({ name, year, price, country, type, desc, image }, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, {
        name,
        year,
        price,
        country,
        type,
        desc,
        image,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const DeleteById = createAsyncThunk(
  "DeleteById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
