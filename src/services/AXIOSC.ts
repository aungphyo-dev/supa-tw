import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("auth")
const AXIOSC = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        Authorization: "Bearer " + token,
    },
})
export default AXIOSC