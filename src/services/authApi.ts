import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RegisterData} from "~/constants/types";

export const authApi = createApi({
    reducerPath : "authApi",
    tagTypes:["register","login","profile"],
    baseQuery:fetchBaseQuery({baseUrl:"http://127.0.0.1:8000/api/auth"}),
    endpoints:(build)=>({
        register : build.mutation<RegisterData,Partial<RegisterData>>({
            query : (data) => ({
                url : "/register",
                method:"POST",
                body : data
            })
        })
    })
})
export const {useRegisterMutation} = authApi