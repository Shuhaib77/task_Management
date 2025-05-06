import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const createUser = createAsyncThunk("createUser", async (values) => {
  try {
    const response = await api.post("user",values);

    return response.data.message;
  } catch (error) {}
});
export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const response = await api.get("all/users");
    console.log(response.data.users, "OPOPPY");
    return response.data.users;
  } catch (error) {}
});

const initialState = {
    userData: [],
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "userHandling",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = true;
      state.error = "error occurdd";
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
