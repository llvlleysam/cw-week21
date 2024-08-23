import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import httpService from "../../Servies/BaseService"
import {  loginURL, refreshURL, signupURL } from "../../Constant/BaseUrl"




const initialState = {
    token:{},
    refresh:{},
    courses:[],
    loading: false,
    error: "",
    signup:[]
}

    export const coursesGet = createAsyncThunk("courses/get_courses",async ()=>{
        try{
            const response = await httpService.get("/api/course-list?page=1&limit=5")
            // console.log(response)
            return response.data
        }catch(e){
            console.log(e)
        }
    })

    export const login = createAsyncThunk("courses/login",async(user)=>{
        try{
            const response = await httpService.post(loginURL,user)
            // console.log(response)
            return response.data 
        }catch (e){
            console.log(e.message)
        }
    })
    export const refreshToken = createAsyncThunk("courses/refresh",async(refresh)=>{
        try{
            const response = await httpService.post(refreshURL,{refresh})
            console.log(response)
            return response 
        }catch (e){
            console.log(e.message)
        }
    })
    export const signup = createAsyncThunk("courses/signup",async(user)=>{
        try{
            const response = await httpService.post(signupURL,user)
            // console.log(response)
            return response.data 
        }catch (e){
            console.log(e.message)
        }
    })


const CoursesSlice = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder
            .addCase(coursesGet.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(coursesGet.fulfilled,(state,action)=>{
                state.loading=false
                state.courses=action.payload
                // console.log(action.payload)
            })
            .addCase(coursesGet.rejected,(state,action)=>{
                state.loading=false
                // state.courses=[],
                state.error=""
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.token = action.payload
                localStorage.setItem("access",action.payload.access)
                localStorage.setItem("refresh",action.payload.refresh)
            })
            .addCase(refreshToken.fulfilled,(state,action)=>{
                state.refresh = action.payload
                // localStorage.setItem("access",action.payload.access)
                localStorage.setItem("access",action.payload.data.access)
            })
            .addCase(signup.fulfilled,(state,action)=>{
                state.signup=action.payload
            })
    }
})

export default CoursesSlice.reducer 