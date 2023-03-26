import axios, { AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { ProductType } from "~~/types";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as ProductType[],
    error: "",
    loading: false,
  }),
  actions: {
    async getProductsData(url: string) {
      // const { data, error } = await useAsyncData<ProductType[]>(
      //   "products",
      //   () => $fetch(url)
      // );

      try {
        this.loading = true;
        const response: AxiosResponse<ProductType[]> = await axios.get(url);
        this.products = response.data;
        this.error = "";
      } catch (error) {
        this.error = "Something went wrong";
      }

      // if (!error.value && data.value) {
      //   this.products = data.value as ProductType[];
      //   this.error = false;
      // } else {
      //   this.error = true;
      //   throw new Error("Something went wrong");
      // }
    },
  },
});
