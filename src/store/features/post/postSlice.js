import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "learning Redux Toolkit",
    content: "ia about learning Redux",
  },
  { id: "2", title: "Slices ........", content: "the more i see slice " },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// export const {} = postSlice.actions;
export default postSlice.reducer;
