    // pinia Plugin
    
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {

    state: () => ({
        cartList: [],
    }),
    
    getters: {

        getCartList(state) {
            return state.cartList;
        },
    
        getTotalItems(state) {
            return state.cartList.length;
        }
    
    },

    actions: {
        addProductToCart(productData) {

            this.cartList.push(productData);
        },

        removeProductFromCart(index) {
            this.cartList.splice(index, 1);
        }
    }
})
