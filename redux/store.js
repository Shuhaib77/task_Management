import { configureStore } from "@reduxjs/toolkit";

import complaintslice from "../redux/complaintSlice";
import userSlice from "../redux/userSlice";

const store = configureStore({
  reducer: {
    userdata: userSlice,
    complaintData: complaintslice,
  },
});

export default store;
