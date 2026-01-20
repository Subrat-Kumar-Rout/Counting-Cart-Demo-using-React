import {configureStore} from "@reduxjs/toolkit"
import slicer1 from "./slice1"

export const store = configureStore({
  reducer:{
    counter: slicer1,
},
})