import axios from "axios";


const instance = axios.create({
    baseURL: 'http://192.168.0.192:7777',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export const login = async(a) => {
    let { user, password } = a

    let result = await instance.post("/login", { user, password })
    return result.data;
}
export default instance;