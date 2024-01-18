import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action)=>{
        console.log("addToWishlist>>",action.payload);
        const doesExist = state.wishlist.find((item)=>item._id==action.payload._id)
        console.log(doesExist)
        if(doesExist){
            toast.error("Already exists in your wishlist!")
        }else{
            state.wishlist = [...state.wishlist, action.payload];
            toast.success("Added to wishlist")
            localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]))
        }
    },
    removeFromWishlist: (state, action)=>{
        console.log("deleteFromWishlist>>",action.payload);
        const newArr = JSON.parse(JSON.stringify(state.wishlist))
        const target = newArr.find((item)=>item._id==action.payload)
        const indexOftarget = newArr.indexOf(target)
        console.log(target, indexOftarget)
        newArr.splice(indexOftarget, 1)
        state.wishlist = newArr;
        toast.success("Item removed from wishlist")
        localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]))
    }
  },
});

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export const wishlistReducer = wishlistSlice.reducer