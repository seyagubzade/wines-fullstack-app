import { configureStore } from "@reduxjs/toolkit";
import { wineReducer } from "./wine/wineSlice";
import { wishlistReducer } from "./wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    wine: wineReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
