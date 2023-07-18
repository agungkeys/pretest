import { createSlice } from "@reduxjs/toolkit"

const darkModeStatus = typeof window !== 'undefined' ? localStorage.getItem('theme') : null

export const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState: {
    data: darkModeStatus || 'light'
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.data = action.payload;
    }
  }
})

export const { changeDarkMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
