import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(pagrams) {
    const url = '/categories';
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.get(url, {pagrams})
  },

  get(id) {
    const url = `categories/${id}`;
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/categories';
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.post(url,data)
  },

  update(data) {
    const url = `categories/${data.id}`;
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `categories/${id}`;
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.delete(url)
  },
}

export default categoryApi;