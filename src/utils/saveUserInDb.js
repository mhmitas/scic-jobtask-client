import { axiosInstance } from "../hooks/useAxios"

export async function registerUserInDb(email, displayName, photoUrl = null) {
    const doc = { displayName, email, photoUrl }
    const res = await axiosInstance.post(`/auth/sign-up`, doc)
    console.log(res)
    const token = res.data;
    localStorage.setItem("token", token)
    return "success"
}

export async function signInUserInDb(email) {
    const res = await axiosInstance.post(`/auth/sign-in`, { email })
    const token = res.data
    localStorage.setItem("token", token)
    return "success"
}

export async function completeLogout() {
    localStorage.removeItem("token")
}