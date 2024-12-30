import { configureStore } from "@reduxjs/toolkit";
import { devtools } from "globals";

import authSliceReducer from './slices/AuthSlice'

const store = ({
    reducer : {
        auth : authSliceReducer
    },
    devtools : true
})

export default store;