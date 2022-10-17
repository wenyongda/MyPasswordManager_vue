import { axios } from "@/api/axios"
//请求示例
//get
export const GetHelloWorld = (data) => {
    return axios({
        url: "/Home/GetHelloWorld",
        method: "get"
    })
}
//post
export const mokePost = (data) => {
    return axios({
        url: "/api/xxxx",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 10000
        }
    })
}
