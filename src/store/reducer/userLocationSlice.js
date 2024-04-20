import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  latitude: 0,
  longitude: 0,
};
export const userLocationSlice = createSlice({
  name: "location",
  initialState: initialState,

  reducers: {
    setUserLocation: (state, action) => {
      console.log(action.payload);
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
