import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "../Courses.slice/Courses.slice";



export const store = configureStore({
    reducer:{
        courses: CoursesReducer
    }
})


