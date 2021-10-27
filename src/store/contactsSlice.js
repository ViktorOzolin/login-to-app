import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from "../api/api";

export const getContactsData = createAsyncThunk(
  "contacts/getContactsData",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await contactsAPI.getData();
      if (!response.ok) {
        throw new Error("Ошибка сервера. Не удалось отправить данные");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contactList: [],
    isFetch: false,
    errors: [],
  },
  reducers: {
    setContactsData: (state, action) => {},
  },
  extraReducers: {
    [getContactsData.pending]: (state, action) => {
      state.isFetch = true;
    },
    [getContactsData.fulfilled]: (state, action) => {
      state.contactList = action.payload;
      state.isFetch = false;
    },
    [getContactsData.rejected]: (state, action) => {
      state.errors.push(action.payload);
      state.isFetch = false;
    },
  },
});
export const { setContactsData } = contactsSlice.actions;

export default contactsSlice.reducer;
