import axios from "axios";
import instance from "./index";
import ElementUI from 'element-ui';
export const reg = async(email, password, verify) => {
    console.log(email, password, verify);
    let result = await instance.post("register", { email, password, verify })
}
export const getVerify = async(email) => {
    let result = await instance.post("get_email", { email })
}