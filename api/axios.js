import axios from "axios";

const instance = axios.create({
    baseURL:"https://api-gym-v6.vercel.app/api",
    /*Es para que este dominio pueda enviar y recibir cookies para autenticar usuarios*/ 
    // withCredentials:true
})

export default instance