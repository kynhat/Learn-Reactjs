import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    // return axiosClient.get(url, {pagrams:pagrams})
    return axiosClient.post(url,data)
  },
}

export default userApi;