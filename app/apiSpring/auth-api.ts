import apiSpring from "@/app/apiSpring/back-api"

const PATH = "/auth"

const login = (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append("email", email)
    params.append("password", password)
    return apiSpring({
        url: `${PATH}/login`,
        params,
        method: "GET"
    })
}


export {
    login,
}
