import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // add to cart
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = {...remainingProducts,existingProduct}
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // remove product from cart
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        // increment quantity
        incrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = {...remainingProducts,existingProduct}
            },
            decrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = {...remainingProducts,existingProduct}
            },
            emptyCart:(state)=>{
                return[]
            }

    }
})

export const {addToCart, removeCartItem, incrementCartItem, decrementCartItem, emptyCart} = cartslice.actions
export default cartslice.reducer