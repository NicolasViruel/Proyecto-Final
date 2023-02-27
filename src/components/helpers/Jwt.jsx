import jwt from "jwt-decode"

export const jwtDecoded = (token) =>{
    if (token) {
        const decoded = jwt(token)
    return decoded.role
    }
    
}

export const getuser_id = () =>{
    const token = localStorage.getItem("token")
    if (token) {
        const decoded = jwt(token)
    return decoded.user_id
    }
    
}

