import axios, { AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { ProductType } from "~~/types";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: {} as ProductType,
    error: "",
    loading: false,
  }),
  actions: {
    async getProductsData(url: string) {
      try {
        this.loading = true;
        const response: AxiosResponse<ProductType> = await axios.get(url);
        this.product = response.data;
        this.error = "";
      } catch (error) {
        this.error = "Something went wrong";
      }
    },
  },
});
