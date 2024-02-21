import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../Slices/themeSlice.js'

export const store = configureStore({
    reducer: {
        toggletheme : themeReducer
    }
})
