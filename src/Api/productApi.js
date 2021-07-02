
import axiosClient from "./axiosClient";

const productApi = {
  async getAll(pagrams) {
    const url = '/products';

    // vd 1 get api va show lên giao dien
    // return axiosClient.get(url, {pagrams:pagrams})
    // return axiosClient.get(url,{pagrams})

    //call api cua gio hang
    const newParams = { ...pagrams };
    newParams._start = !pagrams?._page || pagrams?._page <= 1 ? 0 : ( pagrams?._page -1 ) * ( pagrams?._limit || 50 );

    //remove un-need key
    delete newParams?._page;

    //fetch product list + count
    const productList =  await axiosClient.get('/products', {params: newParams });
    const count = await axiosClient.get('/products/count', {pagrams: newParams});

    //Build respone and return 
    return {
      data: productList,
      pagination: {
        page: pagrams?._page,
        limit: pagrams?._limit,
        total: count,
      },
    }
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