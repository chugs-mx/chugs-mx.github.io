import axios from "axios"

const API_URL = process.env.BACK_API_URL || "http://localhost:8080"
const axiosInstance = axios.create({
    baseURL: API_URL,
})
export default axiosInstance