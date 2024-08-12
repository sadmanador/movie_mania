import { configureStore } from "@reduxjs/toolkit";
import paginationsReducer from "../features/paginations/paginationsSlice";
import apiDataReducer from "../features/apiDataInfos/apiDataSlice";

const store = configureStore({
  reducer: {
    paginations: paginationsReducer,
    apiData: apiDataReducer,
  },
});

export default store;
