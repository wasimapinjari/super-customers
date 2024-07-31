import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import customerSlice from "./customerSlice";
import formSlice from "./formSlice";

const store = configureStore({
  reducer: { customers: customerSlice, form: formSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
