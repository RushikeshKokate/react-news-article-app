 
import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
