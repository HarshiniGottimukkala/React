import { createSlice } from '@reduxjs/toolkit'

const initialState = { theme: 'light' }

const themeSlice = createSlice({
    name: 'toggletheme',
    initialState,
    reducers: {
        changeTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light'; // Toggle between light and dark themes
        },
        

    },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer