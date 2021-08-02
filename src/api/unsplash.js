import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Cw9HVCKUfQH28JsY8O7GCsV6fq3a1WvboJSppvYDgY4'
    }
});