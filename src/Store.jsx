import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./Features/OpenModal/ModalSlice";

const store = configureStore({
  reducer: { modal: ModalReducer },
});

export default store;
