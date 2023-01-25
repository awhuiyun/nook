import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchPhrase: "" },
  reducers: {
    searchOnSubmit: (state, action) => {
      if (action.payload !== "") {
        const words = action.payload.split(" ");
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        const searchPhrase = words.join(" ");
        state.searchPhrase = searchPhrase;
      } else {
        state.searchPhrase = "";
      }
    },
  },
});

export const { searchOnSubmit } = searchSlice.actions;

export default searchSlice.reducer;
