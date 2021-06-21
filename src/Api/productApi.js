import axiosClient from "./axiosClient";

const productApi = {
  getAll(pagrams) {
    const url = '/products';
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.get(url,{pagrams})
  },

  get(id) {
    const url = `products/${id}`;
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/products';
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.post(url,data)
  },

  update(data) {
    const url = `products/${data.id}`;
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `products/${id}`;
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.delete(url)
  },
}

export default productApi;