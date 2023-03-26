import { defineStore } from "pinia";
import { CartItem, ProductType } from "~~/types";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [] as (CartItem & { qty: number })[],
    modalIsShow: false,
  }),
  getters: {
    cartQty(state) {
      return state.cartItems.reduce((total, item) => total + item.qty, 0);
    },
    cartTotal(state) {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
  },
  actions: {
    // show modal
    modalShowHandler() {
      this.modalIsShow = !this.modalIsShow;
    },

    // add items to cart
    addToCart(item: ProductType, qty: number = 1) {
      const existingItem = this.cartItems.find((p) => p.id === item.id);
      if (existingItem) {
        existingItem.qty += qty;
      } else {
        this.cartItems.push({ ...item, qty });
      }
      console.log(this.cartItems);
    },

    // remove item from cart
    removeCartItem(productId: number) {
      const index = this.cartItems.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.cartItems = this.cartItems.splice(index, 1);
      }
    },
  },
});
