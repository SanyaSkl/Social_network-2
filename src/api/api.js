import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f1cd873e-5a3d-45fc-bdfd-cdc1dd4c8b6d"
    }
})


export const getUsers = (currentPage=1, pageSize=10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}
