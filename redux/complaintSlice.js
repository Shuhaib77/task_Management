import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../src/service/api";

export const addComplaints = createAsyncThunk(
  "addComplaints",
  async ({ userId, values }) => {
    try {
      const response = await api.post(`complaints/${userId}`, values);

      return response.data.message;
    } catch (error) {}
  }
);
export const getComplaints = createAsyncThunk("getComplaints", async () => {
  try {
    const response = await api.get("complaints");
    console.log(response.data.complaints, "OPOPPY");
    return response.data.complaints;
  } catch (error) {}
});

export const pendingComplaints = createAsyncThunk(
  "pendingComplaints",
  async (userId) => {
    try {
      const response = await api.get(`pending/${userId}`);
      console.log(response.data.complaint, "OPOPPY");
      return response.data.complaint;
    } catch (error) {}
  }
);

export const exComplaints = createAsyncThunk("exComplaints", async (userId) => {
  try {
    const response = await api.get(`ex/${userId}`);
    console.log(response.data.complaint, "OPOPPY");
    return response.data.complaint;
  } catch (error) {}
});

export const compleatedComplaints = createAsyncThunk(
  "compleatedComplaints",
  async (userId) => {
    try {
      const response = await api.get(`compleated/${userId}`);
      console.log(response.data.complaint, "OPOPPY");
      return response.data.complaint;
    } catch (error) {}
  }
);

export const solveComplaints = createAsyncThunk(
  "solveComplaints",
  async ({ complaintId, values }) => {
    try {
      const response = await api.post(`solve/${complaintId}`, values);
      return response.data.message;
    } catch (error) {}
  }
);

export const editComplaints = createAsyncThunk(
  "editComplaints",
  async ({ complaintId, values, userId }) => {
    try {
      console.log("Editing complaint:", { complaintId, userId, values,},"lolo");

      const response = await api.put(`edit/${complaintId}`, values);
      return response.data.message;
    } catch (error) {
      console.error("Error editing complaint:", error);
      throw error;
    }
  }
);
const initialState = {
  data: [],
  dataPending: [],
  dataEx: [],
  dataCompleated: [],
  loading: false,
  error: "",
};

const complaintSlice = createSlice({
  name: "complaintsHandle",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComplaints.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getComplaints.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getComplaints.rejected, (state, action) => {
      state.loading = true;
      state.error = "error occurdd";
    });

    builder.addCase(pendingComplaints.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(pendingComplaints.fulfilled, (state, action) => {
      state.loading = false;
      state.dataPending = action.payload;
    });
    builder.addCase(pendingComplaints.rejected, (state, action) => {
      state.loading = true;
      state.error = "error occurdd";
    });
    builder.addCase(exComplaints.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(exComplaints.fulfilled, (state, action) => {
      state.loading = false;
      state.dataEx = action.payload;
    });
    builder.addCase(exComplaints.rejected, (state, action) => {
      state.loading = true;
      state.error = "error occurdd";
    });
    builder.addCase(compleatedComplaints.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(compleatedComplaints.fulfilled, (state, action) => {
      state.loading = false;
      state.dataCompleated = action.payload;
    });
    builder.addCase(compleatedComplaints.rejected, (state, action) => {
      state.loading = true;
      state.error = "error occurdd";
    });
  },
});

export const {} = complaintSlice.actions;
export default complaintSlice.reducer;
