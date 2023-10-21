export interface Error {
    name ?: string,
    email :string,
    password :string
}
export interface RegisterData  {
    name : string,
    email : string,
    password :string,
    password_confirmation : string,
    error : {
        data : any
    },
    isLoading ?: boolean,
    isError ?: boolean
}

