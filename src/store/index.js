import { configureStore } from "@reduxjs/toolkit"
import authSlice  from "./authSlice"
import contactsSlice from "./contactsSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        contacts: contactsSlice
    }
})