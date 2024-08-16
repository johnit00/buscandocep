import axios from "axios";

const api = axios.create({
    baseurl: "https://viacep.com.br/ws/"
})
export default api;