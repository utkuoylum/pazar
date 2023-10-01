import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    productData: [],
    userInfo: null,
};

export const pazarSlice = createSlice({
    name: "pazar",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.productData = action.payload;
        }
    }
})

export const {
    addToCart
} = pazarSlice.actions

export default pazarSlice.reducer;