import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  dataForChange: "",
};

const ModalReducer = createSlice({
  name: `ModalReducer`,
  initialState,
  reducers: {
    changeStatus: {
      prepare(status, type) {
        return { payload: { status, type } };
      },
      reducer(state, action) {
        state.open = action.payload.status;
        action.payload.type !== ""
          ? (state.dataForChange = action.payload.type)
          : "";
      },
    },
  },
});

export const { changeStatus } = ModalReducer.actions;
export default ModalReducer.reducer;
