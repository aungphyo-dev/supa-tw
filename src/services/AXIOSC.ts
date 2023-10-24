import axios from "axios";
import Cookies from "js-cookie";

const AXIOSC = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        Authorization: "Bearer " + Cookies.get("auth"),
        "Content-Type" : "multipart/form-data"
    },
})

export default AXIOSC