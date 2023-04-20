import axios from 'axios'
// local : http://localhost:8080
// production : https://ecommerce-jrwd.onrender.com

const api = axios.create({
  baseURL: 'https://ecommerce-jrwd.onrender.com',
})

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('userInfo'))

    if (!!user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export const userSignup = async (data) => await api.post('user/signup', data)

export const userSignin = async (data) => await api.post('user/signin', data)

export const getUserById = async (_id) =>
  await api.post('/user/getUser', { _id })

export const addProduct = async (data) =>
  await api.post('/product/addProduct', data)

export const getProductsById = async (_id) => await api.get(`/product/${_id}`)

export const getProductsByCategory = async (category) =>
  await api.get(`/product/category/${category}`)

export const makePayment = async (data) => await api.post('/payment', data)
