import axios from "axios";
import {UserType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1f899b25-ea32-4422-868d-0e025508e3bf"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodesForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type  GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}


export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}